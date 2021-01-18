import React from 'react';
import classNames from 'classnames';
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepostIcon from '@material-ui/icons/RepeatOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/ReplyOutlined';
import { Avatar, Container, createStyles, Grid, IconButton, InputBase, makeStyles, Paper, TextField, Typography, withStyles } from '@material-ui/core';
import { useHomeStyles } from '../pages/Home'

interface ITweetProps {
  text: string;
  classes: ReturnType<typeof useHomeStyles>,
  user: {
    fullName: string;
    username: string;
    avatarUrl: string;
  }
}

export const Tweet: React.FC<ITweetProps> = ({ text, user, classes }: ITweetProps): React.ReactElement => {
  return (
    <Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant="outlined">
      <Grid container spacing={2}>
        <Grid item xs={1}>
          <Avatar className={classes.tweetAvatar} alt={`Avatar of ${user.fullName}`} src={user.avatarUrl} />
        </Grid>
        <Grid item xs={11}>
          <Typography>
            <b>{user.fullName}</b>&nbsp;
            <span className={classes.tweetUserName}>@{user.username}</span>&nbsp;
            <span className={classes.tweetUserName}>·</span>&nbsp;
            <span className={classes.tweetUserName}>1 ч</span>
          </Typography>
          <Typography variant="body1" gutterBottom>{text}</Typography>
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
        </Grid>
      </Grid>
    </Paper>
  );
};
