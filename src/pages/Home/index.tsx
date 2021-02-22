import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Route } from 'react-router-dom';
import { BackButton } from '../../components/common/BackButton';
import { FullTweet } from './components/FullTweet';
import { fetchTags } from '../../store/ducks/tags/actionCreators';
import { useHomeStyles } from './theme';
import { Tweet } from '../../components/common/Tweet';
import { fetchTweets } from '../../store/ducks/tweets/actionCreators';
import { selectAreTweetsLoading, selectTweetsItems } from '../../store/ducks/tweets/selectors';
import { AddTweetForm } from '../../components/common/AddTweetForm';

export const Home = (): React.ReactElement => {
  const classes = useHomeStyles();
  const dispatch = useDispatch();
  const tweets = useSelector(selectTweetsItems);
  const isLoading = useSelector(selectAreTweetsLoading);

  React.useEffect(() => {
    dispatch(fetchTweets());
    dispatch(fetchTags());
  }, [dispatch]);

  return (
    <Paper className={classes.tweetsWrapper} variant="outlined">
      <Paper className={classes.tweetsHeader} variant="outlined">
        <Route path="/home/:any">
          <BackButton />
        </Route>
        <Route path={['/home', '/home/search']} exact>
          <Typography variant="h6">Твиты</Typography>
        </Route>
        <Route path="/home/tweet">
          <Typography variant="h6">Твитнуть</Typography>
        </Route>
      </Paper>
      <Route path={['/home', '/home/search']} exact>
        <Paper>
          <div className={classes.addForm}>
            <AddTweetForm classes={classes} />
          </div>
          <div className={classes.addFormBottomLine} />
        </Paper>
      </Route>
      <Route path="/home" exact>
        {isLoading ? (
          <div className={classes.tweetsCentred}>
            <CircularProgress />
          </div>
        ) : (
            tweets.map((tweet) => (
              <Tweet key={tweet._id} classes={classes} images={tweet.images} {...tweet} />
            ))
          )}
      </Route>
      <Route path="/home/tweet/:id" component={FullTweet} exact />
    </Paper>
  );
};
