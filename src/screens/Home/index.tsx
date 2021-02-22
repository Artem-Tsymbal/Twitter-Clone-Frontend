import React from 'react';
import './index.scss';
import { WiStars } from 'react-icons/wi';
import AddTweetForm from '../../components/common/AddTweetForm/AddTweetForm';
import Tweet from '../../components/common/Tweet/Tweet';

export const Home: React.FC = () => {

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
