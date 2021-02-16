import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Route } from 'react-router-dom';
import { BackButton } from '../../components/BackButton';
import { FullTweet } from './components/FullTweet';
import { fetchTags } from '../../store/ducks/tags/actionCreators';
import { ITweetsState } from '../../store/ducks/tweets/contracts/state';
import { useHomeStyles } from './theme';
import { Tweet } from '../../components/Tweet';
import { Tags } from '../../components/Tags';
import { SideMenu } from '../../components/SideMenu';
import { AddTweetForm } from '../../components/AddTweetForm';
import { SearchTextField } from '../../components/SearchTextField';
import { fetchTweets } from '../../store/ducks/tweets/actionCreators';
import { selectAreTweetsLoading, selectTweetsItems } from '../../store/ducks/tweets/selectors';
import { WhoToFollow } from '../../components/WhoToFollow';

export const Home: React.FC = (): React.ReactElement => {
  const classes = useHomeStyles();
  const dispatch = useDispatch();
  const tweets: ITweetsState['items'] = useSelector(selectTweetsItems);
  const isLoading: boolean = useSelector(selectAreTweetsLoading);

  React.useEffect(() => {
    dispatch(fetchTweets());
    dispatch(fetchTags());
  }, [dispatch]);

  return (
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid sm={1} md={3} item>
          <SideMenu classes={classes} />
        </Grid>
        <Grid sm={8} md={6} item>
          <Paper className={classes.tweetsWrapper} variant="outlined">
            <Paper className={classes.tweetsHeader} variant="outlined">
              <Route path="/home/:any" exact>
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
              ) : (tweets.map((tweet) => (
                <Tweet key={tweet._id} classes={classes} {...tweet} />
              )))}
            </Route>
            <Route path="/home/tweet/:id" component={FullTweet} exact />
          </Paper>
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
            <WhoToFollow classes={classes} />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};
