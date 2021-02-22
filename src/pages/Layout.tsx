import React from 'react';
import { Container, Grid, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import { SideMenu } from '../components/common/SideMenu';
import { useHomeStyles } from '../pages/Home/theme';
import { SearchTextField } from '../components/common/SearchTextField';
import { Tags } from '../components/common/Tags';
interface ILayout {
  children: React.ReactNode;
}

export const Layout: React.FC<ILayout> = ({ children }: ILayout): React.ReactElement => {
  const classes = useHomeStyles();

  return (
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid sm={1} md={3} item>
          <SideMenu classes={classes} />
        </Grid>
        <Grid sm={8} md={6} item>
          {children}
        </Grid>
        <Grid sm={3} md={3} item>
          <div className={classes.rightSide}>
            <SearchTextField
              variant="outlined"
              placeholder="Поиск по Твиттеру"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              fullWidth
            />
            <Tags classes={classes} />
            {
              // <Users />
            }
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};
