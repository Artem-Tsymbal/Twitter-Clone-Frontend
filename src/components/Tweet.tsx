import React from 'react';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepostIcon from '@material-ui/icons/RepeatOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/ReplyOutlined';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import { Menu, MenuItem } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { formatDate } from '../utils/formatDate';
import { useHomeStyles } from '../pages/Home/theme';
import { ImageList } from './ImageList';

interface ITweetProps {
  _id: string;
  text: string;
  classes: ReturnType<typeof useHomeStyles>;
  createdAt: string;
  images?: string[];
  user: {
    fullName: string;
    username: string;
    avatarUrl?: string;
  };
}

export const Tweet: React.FC<ITweetProps> = ({
  _id,
  text,
  user,
  classes,
  images,
  createdAt,
}: ITweetProps): React.ReactElement => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const history = useHistory();

  const handleClickTweet = (event: React.MouseEvent<HTMLAnchorElement>): void => {
    event.preventDefault();
    history.push(`/home/tweet/${_id}`);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <a onClick={handleClickTweet} className={classes.tweetWrapper} href={`/home/tweet/${_id}`}>
      <Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant="outlined">
        <Avatar
          className={classes.tweetAvatar}
          alt={`Аватарка пользователя ${user.fullName}`}
          src={user.avatarUrl}
        />
        <div className={classes.tweetContent}>
          <div className={classes.tweetHeader}>
            <div>
              <b>{user.fullName}</b>&nbsp;
              <span className={classes.tweetUserName}>{user.username}</span>&nbsp;
              <span className={classes.tweetUserName}>·</span>&nbsp;
              <span className={classes.tweetUserName}>{formatDate(new Date(createdAt))}</span>
            </div>
            <div>
              <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu id="long-menu" anchorEl={anchorEl} open={open} onClose={handleClose} >
                <MenuItem onClick={handleClose}>Редактировать</MenuItem>
                <MenuItem onClick={handleClose}>Удалить твит</MenuItem>
              </Menu>
            </div>
          </div>
          <Typography variant="body1" gutterBottom>
            {text}
            {images && <ImageList classes={classes} images={images} />}
          </Typography>
          <div className={classes.tweetFooter}>
            <div>
              <IconButton>
                <CommentIcon style={{ fontSize: 20 }} />
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton>
                <RepostIcon style={{ fontSize: 20 }} />
              </IconButton>
            </div>
            <div>
              <IconButton>
                <LikeIcon style={{ fontSize: 20 }} />
              </IconButton>
            </div>
            <div>
              <IconButton>
                <ShareIcon style={{ fontSize: 20 }} />
              </IconButton>
            </div>
          </div>
        </div>
      </Paper>
    </a>
  );
};
