import {
  Avatar, CircularProgress, Divider, IconButton, Paper, Typography,
} from '@material-ui/core';
import classNames from 'classnames';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepostIcon from '@material-ui/icons/RepeatOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/ReplyOutlined';
import ruLang from 'date-fns/locale/ru';
import format from 'date-fns/format';
import { fetchTweetData, setTweetData } from '../../../store/ducks/tweet/actionCreators';
import { selectTweetData } from '../../../store/ducks/tweet/selectors';
import { selectAreTweetsLoading } from '../../../store/ducks/tweets/selectors';
import { useHomeStyles } from '../theme';
import { Tweet } from '../../../components/Tweet';
import { ImageList } from '../../../components/ImageList';
import mediumZoom from 'medium-zoom';

export const FullTweet: React.FC = (): React.ReactElement | null => {
  const classes = useHomeStyles();
  const dispatch = useDispatch();
  const tweetData = useSelector(selectTweetData);
  const isLoading = useSelector(selectAreTweetsLoading);
  const params: { id?: string } = useParams();
  const { id } = params;

  React.useEffect(() => {
    if (id) {
      dispatch(fetchTweetData(id));
    }

    return () => {
      dispatch(setTweetData(undefined));
    };
  }, [dispatch, id]);

  React.useEffect(() => {
    if (!isLoading) {
      mediumZoom('.tweet-images img');
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className={classes.tweetsCentred}>
        <CircularProgress />
      </div>
    );
  }

  if (tweetData) {
    return (
      <>
        <Paper className={classes.fullTweet}>
          <div className={classNames(classes.tweetsHeaderUser)}>
            <Avatar
              className={classes.tweetAvatar}
              alt={`Аватарка пользователя ${tweetData.user.fullName}`}
              src={tweetData.user.avatarUrl}
            />
            <Typography>
              <b>{tweetData.user.fullName}</b>&nbsp;
              <div>
                <span className={classes.tweetUserName}>@{tweetData.user.username}</span>&nbsp;
              </div>
            </Typography>
          </div>
          <Typography className={classes.fullTweetText} gutterBottom>
            {tweetData.text}
            <div className="tweet-images">
              {tweetData.images && <ImageList classes={classes} images={tweetData.images} />}
            </div>
          </Typography>
          <Typography>
            <span className={classes.tweetUserName}>{
              format(new Date(tweetData.createdAt), 'H:mm', { locale: ruLang })
            } · </span>
            <span className={classes.tweetUserName}>{
              format(new Date(tweetData.createdAt), 'dd MMM. yyyy', { locale: ruLang })
            }</span>
          </Typography>
          <div className={classNames(classes.tweetFooter, classes.fullTweetFooter)}>
            <IconButton>
              <CommentIcon style={{ fontSize: 25 }} />
            </IconButton>
            <IconButton>
              <RepostIcon style={{ fontSize: 25 }} />
            </IconButton>
            <IconButton>
              <LikeIcon style={{ fontSize: 25 }} />
            </IconButton>
            <IconButton>
              <ShareIcon style={{ fontSize: 25 }} />
            </IconButton>
          </div>
        </Paper>
        <Divider />
        <Tweet
          _id="1"
          text="Hi, thanks for the proposal. At first glance I'm not sure whether it would be worthwhile
          to add an option for this, because I'm not sure this is a common preference. However, I'd be open
          to supporting it if there are a lot of users that want to enforce this style."
          createdAt={new Date().toString()}
          user={{
            fullName: 'Artem Tsymbal',
            username: '@tsymbal',
          }}
          classes={classes}
        />
        <Tweet
          _id="1"
          text="Looks like this rule is being requested for a while, seems like its implementation
          might sound reasonable... #7361 & #8671 are relational discussions about this feature."
          createdAt={new Date().toString()}
          user={{
            fullName: 'Artem Tsymbal',
            username: '@tsymbal',
          }}
          classes={classes}
        />
        <Tweet
          _id="1"
          text="However, given destructuring assignment and import/exports, this statement is not
          completely true, also Airbnb itself contains inconsistency in their code base as in this example:"
          createdAt={new Date().toString()}
          user={{
            fullName: 'Artem Tsymbal',
            username: '@tsymbal',
          }}
          classes={classes}
        />

      </>
    );
  }

  return null;
};
