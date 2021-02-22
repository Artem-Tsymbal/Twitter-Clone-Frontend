import React from 'react';
import './WhoToFollow.scss';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';

const WhoToFollow: React.FC = () => {
  return (
    <div className="follow-block">
      <div className="follow-block-header">
        <span className="trends-block-header__text">Who to follow</span>
      </div>
      <div className="follow-block-list">
        <div className="follow-block-item">
          <div className="main-info-wrapper">
            <div className="follow-block__image"></div>
            <div className="follow-block-content">
              <span className="follow-block-content__fullName">ArtyomTsymbal1</span>
              <span className="follow-block-content__username">@TsymbalArtyom1</span>
            </div>
          </div>
          <button className="follow-block-item__button">Follow</button>
        </div>
        <div className="follow-block-item">
          <div className="main-info-wrapper">
            <div className="follow-block__image"></div>
            <div className="follow-block-content">
              <span className="follow-block-content__fullName">ArtyomTsymbal2</span>
              <span className="follow-block-content__username">@TsymbalArtyom2</span>
            </div>
          </div>
          <button className="follow-block-item__button">Follow</button>
        </div>
        <ShowMoreButton />
      </div>
    </div>
  );
};

export default WhoToFollow;
