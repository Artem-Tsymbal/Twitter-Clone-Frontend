import React from 'react';
import './FullTweet.scss';
import { BiMessageRounded } from 'react-icons/bi';
import { BsThreeDots, BsUpload } from 'react-icons/bs';
import { AiOutlineRetweet, AiOutlineHeart } from 'react-icons/ai';


const FullTweet: React.FC = () => {
  return (
    <div className="full-tweet">
      <div className="full-tweet__wrapper">

        <div className="full-tweet-header">
          <div className="full-tweet-header__info">
            <div className="full-tweet-header__avatar" />
            <div className="full-tweet-header__body">
              <span className="full-tweet-header__fullName">ArtyomTsymbal2</span>
              <span className="full-tweet-header__username">@TsymbalArtyom2</span>
            </div>
          </div>
          <BsThreeDots className="full-tweet-header__button" />
        </div>

        <div className="full-tweet__body">
          <div className="full-tweet-content">
            <span className="full-tweet-content__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptates, a commodi pariatur nihil modi
              incidunt fugit porro enim accusamus hic dignissimos deserunt, iste adipisci quas optio. Accusantium, omnis
              illo?Architecto, rerum saepe. Autem laborum, consequuntur sapiente ducimus, quod laudantium ab labore quo.
            </span>
          </div>
          <div className="full-tweet-footer">
            <div className="full-tweet-footer__date">
              <span className="full-tweet-footer__title">9:30 AM Feb 22</span>
            </div>

            <div className="full-tweet-footer__activity">
              <div className="full-tweet-footer__activity-item">
                <span className="full-tweet-footer__quantity">31.4K</span>
                <span className="full-tweet-footer__title">Retweets</span>
              </div>
              <div className="full-tweet-footer__activity-item">
                <span className="full-tweet-footer__quantity">1,573</span>
                <span className="full-tweet-footer__title">Quote Tweets </span>
              </div>
              <div className="full-tweet-footer__activity-item">
                <span className="full-tweet-footer__quantity">93.1K</span>
                <span className="full-tweet-footer__title">Likes</span>
              </div>
            </div>

            <div className="full-tweet-footer__actions">
              <BiMessageRounded className="full-tweet-footer__action action--blue" />
              <AiOutlineRetweet className="full-tweet-footer__action action--green" />
              <AiOutlineHeart className="full-tweet-footer__action action--red" />
              <BsUpload className="full-tweet-footer__action action--blue" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default FullTweet;
