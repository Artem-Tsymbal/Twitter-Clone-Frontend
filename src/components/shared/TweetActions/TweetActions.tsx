import React from 'react';
import './TweetActions.scss';

import { useDispatch } from 'react-redux';
import { BiMessageRounded } from 'react-icons/bi';
import { BsUpload } from 'react-icons/bs';
import { AiOutlineRetweet, AiOutlineHeart } from 'react-icons/ai';
import { likeTweet } from '../../../store/ducks/tweets/actionCreators';
import { ITweet } from '../../../store/ducks/tweets/contracts/state';

export type TModal = 'reply' | 'retweet' | undefined;
export type TActions = 'fullTweet' | undefined;

interface ITweetProps {
  tweet: ITweet;
  actionsType?: TActions;
  handleClickOpenModal: (event: React.MouseEvent<HTMLElement>, formType: TModal) => void;
}

const TweetActions: React.FC<ITweetProps> = ({
  tweet,
  actionsType,
  handleClickOpenModal,
}: ITweetProps) => {
  const dispatch = useDispatch();
  let actionsStyle;
  let itemStyle;
  let iconStyle;

  const handleClickLike = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    event.preventDefault();
    dispatch(likeTweet(tweet._id));
  };

  if (actionsType) {
    actionsStyle = {
      maxWidth: 'none',
      height: '49px',
      marginTop: '0px',
      justifyContent: 'space-around',
    };
    itemStyle = {
      width: 'auto',
      height: 'auto',
    };
    iconStyle = {
      width: '26px',
      height: '22.5px',
      padding: '8px',
    };
  }

  return (
    <div className="tweet-actions" style={actionsStyle}>
      <div onClick={event => handleClickOpenModal(event, 'reply')} className="tweet-actions-wrapper blue">
        <div className="tweet-actions__item action--blue" style={itemStyle}>
          <BiMessageRounded style={iconStyle} />
        </div>
        {!actionsType && <span className="tweet-actions__quantity">11</span>}
      </div>

      <div onClick={event => handleClickOpenModal(event, 'retweet')} className="tweet-actions-wrapper green">
        <div className="tweet-actions__item action--green" style={itemStyle}>
          <AiOutlineRetweet style={iconStyle} />
        </div>
        {!actionsType && <span className="tweet-actions__quantity">11</span>}
      </div>

      <div
        onClick={handleClickLike}
        className={tweet.favorite ? 'tweet-actions-wrapper red liked' : 'tweet-actions-wrapper red'}
      >
        <div className="tweet-actions__item action--red" style={itemStyle}>
          <AiOutlineHeart style={iconStyle} />
        </div>
        {!actionsType && <span className="tweet-actions__quantity">{tweet.likes.length}</span>}
      </div>

      <div className="tweet-actions__item action--blue" style={itemStyle}>
        <BsUpload style={iconStyle} />
      </div>
    </div>
  );
};

export default TweetActions;
