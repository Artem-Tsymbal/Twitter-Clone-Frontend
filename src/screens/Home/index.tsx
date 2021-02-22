import React from 'react';
import './index.scss';
import { WiStars } from 'react-icons/wi';
import AddTweetForm from '../../components/common/AddTweetForm/AddTweetForm';
import ModalWindow from '../../components/common/ModalWindow/ModalWindow';

export const Home: React.FC = () => {

  return (
    <div className="home-wrapper">
      <div className="home-header">
        <span className="home-header__title">Home</span>
        <WiStars className="home-header__icon" />
      </div>
      <AddTweetForm />
      <ModalWindow />
      <div className="home-divider" />
    </div>
  );
};
