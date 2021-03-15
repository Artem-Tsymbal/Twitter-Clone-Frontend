import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import { Route } from 'react-router-dom';
import { fetchTags } from '../../store/ducks/tags/actionCreators';
import { fetchDataOfTweets } from '../../store/ducks/tweets/actionCreators';
import { selectItemsOfTweets, selectStatusOfTweetsIsLoading } from '../../store/ducks/tweets/selectors';

import './index.scss';
import { BackButton } from '../../components/common/BackButton';
import { WiStars } from 'react-icons/wi';
import AddTweetForm from '../../components/common/AddTweetForm/AddTweetForm';
import Tweet from '../../components/common/Tweet/Tweet';
import FullTweet from '../../components/common/FullTweet/FullTweet';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const tweets = useSelector(selectItemsOfTweets);
  const isLoading = useSelector(selectStatusOfTweetsIsLoading);

  React.useEffect(() => {
    dispatch(fetchDataOfTweets());
    // dispatch(fetchTags());
  }, [dispatch]);

  return (
    <div className="home-wrapper">
      <div className="home-header">
        <Route path="/home" exact>
          <span className="home-header__title">Home</span>
        </Route>
        <Route path="/home/:any">
          <span className="home-header__title"><BackButton />Tweet</span>
        </Route>
        <WiStars className="home-header__icon" />
      </div>
      <Route path="/home" exact>
        <AddTweetForm defaultDraftRowsValue={1} isRetweet={false} />
        <div className="home-divider" />
        {isLoading ? (
          <CircularProgress />
        ) : (
            tweets.map(tweet => (
              <Tweet key={tweet._id} tweet={tweet} />
            ))
          )}
      </Route>
      <Route path="/home/tweet/:id" exact>
        <FullTweet></FullTweet>
      </Route>
    </div>
  );
};

export default Home;
