import React from 'react';
import './TrendsForYou.scss';
import { FiSettings } from 'react-icons/fi';
import { BsThreeDots } from 'react-icons/bs';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';

const TrendsForYou: React.FC = () => {
  return (
    <div className="trends-block">
      <div className="trends-block-header">
        <span className="trends-block-header__text">Trends for you</span>
        <div className="trends-block-settings">
          <FiSettings className="trends-block-settings__icon" />
        </div>
      </div>
      <div className="trends-block-list">
        <div className="trends-block-item">
          <div className="trends-block-item__wrapper">
            <span className="trends-block-item__header">Trending in Ukraine</span>
            <span className="trends-block-item__trend">Люблю тебя 1</span>
            <span className="trends-block-item__quantity">3,5414 Tweets</span>
          </div>
          <BsThreeDots className="trends-block-item__dots" />
        </div>

        <div className="trends-block-item">
          <div className="trends-block-item__wrapper">
            <span className="trends-block-item__header">Trending in Ukraine</span>
            <span className="trends-block-item__trend">Люблю тебя 2</span>
            <span className="trends-block-item__quantity">33,514 Tweets</span>
          </div>
          <BsThreeDots className="trends-block-item__dots" />
        </div>
        <div className="trends-block-item">
          <div className="trends-block-item__wrapper">
            <span className="trends-block-item__header">Trending in Ukraine</span>
            <span className="trends-block-item__trend">Люблю тебя 3</span>
            <span className="trends-block-item__quantity">3,2514 Tweets</span>
          </div>
          <BsThreeDots className="trends-block-item__dots" />
        </div>
        <div className="trends-block-item">
          <div className="trends-block-item__wrapper">
            <span className="trends-block-item__header">Trending in Ukraine</span>
            <span className="trends-block-item__trend">Люблю тебя 4</span>
            <span className="trends-block-item__quantity">3,5142 Tweets</span>
          </div>
          <BsThreeDots className="trends-block-item__dots" />
        </div>
        <ShowMoreButton />
      </div>
    </div>
  );
};

export default TrendsForYou;
