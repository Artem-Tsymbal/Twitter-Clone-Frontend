import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useHomeStyles } from '../pages/Home/theme';
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepostIcon from '@material-ui/icons/RepeatOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/ReplyOutlined';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

interface ITweetProps {
  _id: string;
  text: string;
  classes: ReturnType<typeof useHomeStyles>;
  user: {
    fullName: string;
    username: string;
    avatarUrl: string;
  };
}

export const Tweet: React.FC<ITweetProps> = ({ _id, text, user, classes }: ITweetProps): React.ReactElement => {
  return (
    <Link className={classes.tweetWrapper} to={`/home/tweet/${_id}`}>
      <Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant="outlined">
        <Avatar
          className={classes.tweetAvatar}
          alt={`Аватарка пользователя ${user.fullName}`}
          src={user.avatarUrl}
        />
        <div>
          <Typography>
            <b>{user.fullName}</b>&nbsp;
          <span className={classes.tweetUserName}>@{user.username}</span>&nbsp;
          <span className={classes.tweetUserName}>·</span>&nbsp;
          <span className={classes.tweetUserName}>1 ч</span>
          </Typography>
          <Typography variant="body1" gutterBottom>
            {text}
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
    </Link >
  );
};