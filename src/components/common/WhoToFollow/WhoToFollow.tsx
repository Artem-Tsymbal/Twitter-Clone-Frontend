import React from 'react';
import './WhoToFollow.scss';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';
import { Link } from 'react-router-dom';

const WhoToFollow: React.FC = () => (
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
          <div className="follow-block__image" />
          <div className="follow-block-content">
            <span className="follow-block-content__fullName">ArtyomTsymbal2</span>
            <span className="follow-block-content__username">@TsymbalArtyom2</span>
          </div>
        </div>
        <button className="follow-block-item__button">Follow</button>
      </div>
      <Link to="/connect_people" className="trends-block__link">
        <ShowMoreButton />
      </ Link>
    </div>
  </div>
);

export default WhoToFollow;
