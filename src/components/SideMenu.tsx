import React from 'react';
import { Avatar, Button, Container, createStyles, Grid, IconButton, InputBase, makeStyles, Paper, TextField, Typography, withStyles } from '@material-ui/core';
import { useHomeStyles } from '../pages/Home'
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MessageIcon from '@material-ui/icons/EmailOutlined';
import BookmarkIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListIcon from '@material-ui/icons/ListAltOutlined';
import UserIcon from '@material-ui/icons/PermIdentityOutlined';

interface ISideMenu {
  classes: ReturnType<typeof useHomeStyles>;
}

export const SideMenu: React.FC<any> = ({ classes }: ISideMenu): React.ReactElement => {
  return (
    <ul className={classes.sideMenuList}>
      <li className={classes.sideMenuListItem}>
        <div className="">
          <IconButton className={classes.logo} aria-label="delete" color="primary">
            <TwitterIcon className={classes.logoIcon} />
          </IconButton>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div className="">
          <SearchIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant="h6">Поиск</Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div className="">
          <NotificationIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant="h6">Уведомления</Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div className="">
          <MessageIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant="h6">Сообщения</Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div className="">
          <BookmarkIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant="h6">Закладки</Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div className="">
          <ListIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant="h6">Список</Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <UserIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant="h6">Профиль</Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <Button className={classes.sideMenuTweetButton} variant="contained" color="primary" fullWidth>Твитнуть</Button>
      </li>
    </ul >
  );
};
