import React from 'react';
import './index.scss';

import { useDispatch, useSelector } from 'react-redux';
import { fetchTags } from '../../store/ducks/tags/actionCreators';
import { fetchTweets } from '../../store/ducks/tweets/actionCreators';
import { selectTweetsItems, selectAreTweetsLoading } from '../../store/ducks/tweets/selectors';

import { WiStars } from 'react-icons/wi';
import AddTweetForm from '../../components/common/AddTweetForm/AddTweetForm';
import Tweet from '../../components/common/Tweet/Tweet';

export const Home: React.FC = () => {
  const dispatch = useDispatch();
  const tweets = useSelector(selectTweetsItems);
  const isLoading = useSelector(selectAreTweetsLoading);

  React.useEffect(() => {
    dispatch(fetchTweets());
    dispatch(fetchTags());
  }, [dispatch]);

  return (
    <div className="home-wrapper">
      <div className="home-header">
        <span className="home-header__title">Home</span>
        <WiStars className="home-header__icon" />
      </div>
      <AddTweetForm />
      <div className="home-divider" />
      <Tweet />
    </div>
  );
};
