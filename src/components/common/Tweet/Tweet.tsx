import React from 'react';
import './Tweet.scss';
import { BiMessageRounded } from 'react-icons/bi';
import { BsThreeDots, BsUpload } from 'react-icons/bs';
import { AiOutlineRetweet, AiOutlineHeart } from 'react-icons/ai';

const Tweet: React.FC = () => (
  <div className="tweet">
    <div className="tweet__wrapper">

      <div className="tweet__avatar-container">
        <div className="tweet__avatar" />
      </div>

      <div className="tweet__body">

        <div className="tweet-header">
          <div className="tweet-header__info">
            <span className="tweet-header__fullName">ArtyomTsymbal2</span>
            <span className="tweet-header__username">@TsymbalArtyom2</span>
            <span className="tweet-header__time tweet-header__time-dot">·</span>
            <span className="tweet-header__time">3h</span>
          </div>
          <BsThreeDots className="tweet-header__button" />
        </div>

        <div className="tweet-content">
          <span className="tweet-content__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptates, a commodi pariatur nihil modi
            incidunt fugit porro enim accusamus hic dignissimos deserunt, iste adipisci quas optio. Accusantium, omnis
            illo?Architecto, rerum saepe. Autem laborum, consequuntur sapiente ducimus, quod laudantium ab labore quo.
            </span>
        </div>
        <div className="tweet-footer">
          <div className="tweet-footer__container container-reply">
            <div className="tweet-footer__action-wrapper wrapper--blue">
              <BiMessageRounded className="tweet-footer__icon" />
            </div>
            <span className="tweet-footer__quantity">11</span>
          </div>
          <div className="tweet-footer__container container-retweet">
            <div className="tweet-footer__action-wrapper wrapper--red">
              <AiOutlineRetweet className="tweet-footer__icon" />
            </div>
            <span className="tweet-footer__quantity">22</span>
          </div>
          <div className="tweet-footer__container container-like">
            <div className="tweet-footer__action-wrapper wrapper--green">
              <AiOutlineHeart className="tweet-footer__icon" />
            </div>
            <span className="tweet-footer__quantity">33</span>
          </div>
          <div className="tweet-footer__action-wrapper wrapper--blue">
            <BsUpload className="tweet-footer__icon" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Tweet;
