import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider/Divider';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import { ITagsState } from '../../store/ducks/tags/contracts/state';
import { selectAreTagsLoaded, selectTagsItems } from '../../store/ducks/tags/selectors';
import { useHomeStyles } from '../../pages/Home/theme';

interface ITagProps {
  classes: ReturnType<typeof useHomeStyles>;
}

export const Tags: React.FC<ITagProps> = ({
  classes,
}: ITagProps): React.ReactElement | null => {
  const items: ITagsState['items'] = useSelector(selectTagsItems);
  const isLoaded: boolean = useSelector(selectAreTagsLoaded);

  if (!isLoaded) {
    return null;
  }

  return (
    <Paper className={classes.rightSideBlock}>
      <Paper className={classes.rightSideBlockHeader} variant="outlined">
        <b>Актуальные темы</b>
      </Paper>
      <List>
        {items.map((item) => (
          <React.Fragment key={item._id}>
            <ListItem className={classes.rightSideBlockItem}>
              <Link to={`/home/search?q=${item.name}`}>
                <ListItemText
                  primary={item.name}
                  secondary={
                    <Typography component="span" variant="body2" color="textSecondary">
                      Твитов: {item.count}
                    </Typography>
                  }
                />
              </Link>
            </ListItem>
            <Divider component="li" />
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};
