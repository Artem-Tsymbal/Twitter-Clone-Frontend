import React from 'react';
import {
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Button,
  Divider
} from '@material-ui/core';
import { IConnectPeopleState } from '../../store/ducks/connectPeople/contracts/state';
import { useSelector } from 'react-redux';
import { selectConnectPeopleItems } from '../../store/ducks/connectPeople/selectors';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';

interface IWhoToFollowProps {
  classes: any
}

export const WhoToFollow: React.FC<IWhoToFollowProps> = ({ classes }: IWhoToFollowProps): React.ReactElement => {
  //const items: IConnectPeopleState['items'] = useSelector(selectConnectPeopleItems);


  return (
    <Paper className={classes.rightSideBlock}>
      <Paper className={classes.rightSideBlockHeader} variant="outlined">
        <b>Кого читать</b>
      </Paper>
      <List>
        {/* {items.map(item => (
          <React.Fragment key={item._id}>
            <ListItem className={classes.rightSideBlockItem}>
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="https://3dnews.ru/assets/external/illustrations/2020/10/20/1023317/fallout4_new_vegas.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Dock Of Shame"
                secondary={
                  <Typography component="span" variant="body2" color="textSecondary">
                    @FavDockOfShame
                      </Typography>
                }
              />
              <Button color="primary">
                <PersonAddIcon />
              </Button>
            </ListItem>
            <Divider component="li" />
          </React.Fragment>
        ))} */}
      </List>
    </Paper>
  );
};
