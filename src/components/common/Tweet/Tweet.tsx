import React from 'react';
import './Tweet.scss';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { likeTweet, removeTweet } from '../../../store/ducks/tweets/actionCreators';
import { formatDate } from '../../../utils/formatDate';

import { BiMessageRounded } from 'react-icons/bi';
import { BsThreeDots, BsUpload } from 'react-icons/bs';
import { AiOutlineRetweet, AiOutlineHeart } from 'react-icons/ai';
import { Menu, MenuItem } from '@material-ui/core';
import Avatar from '../../shared/Avatar/Avatar';
import ModalWindow from '../ModalWindow/ModalWindow';
import AddTweetForm from '../AddTweetForm/AddTweetForm';
import { ITweet } from '../../../store/ducks/tweets/contracts/state';
import ReTweet from '../ReTweet/ReTweet';

interface ITweetProps {
  tweet: ITweet
}

const Tweet: React.FC<ITweetProps> = ({
  tweet,
}: ITweetProps) => {
  const dispatch = useDispatch();
  const [visibleAddTweetModal, setVisibleAddTweetModal] = React.useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const history = useHistory();

  const handleClickTweet = (): void => {
    history.push(`/home/tweet/${tweet._id}`);
  };

  const handleOpenTweetMenu = (event: any) => {
    event.stopPropagation();
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleCloseTweetMenu = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    event.preventDefault();
    setAnchorEl(null);
  };

  const handleRemoveTweet = (event: React.MouseEvent<HTMLElement>): void => {
    handleCloseTweetMenu(event);
    if (window.confirm('Вы уверены?')) {
      dispatch(removeTweet(tweet._id));
    }
  };

  const handleClickOpenAddTweetModal = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    event.preventDefault();
    setVisibleAddTweetModal(true);
  };

  const handleCloseAddTweetModal = () => {
    setVisibleAddTweetModal(false);
  };

  const handleClickLike = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    event.preventDefault();
    dispatch(likeTweet(tweet._id));
  };

  return (
    <div className="tweet">
      <div onClick={handleClickTweet} className="tweet__wrapper">

        <div className="tweet__avatar-container">
          <Avatar size='middle' fullName={tweet.user?.fullName} avatar={tweet.user?.avatar} response={false} />
        </div>

        <div className="tweet__body">

          <div className="tweet-header">
            <div className="tweet-header__info">
              <span className="tweet-header__fullName">{tweet.user.fullName}</span>
              <span className="tweet-header__username">@{tweet.user.username}</span>
              <span className="tweet-header__time tweet-header__time-dot">·</span>
              <span className="tweet-header__time">{formatDate(new Date(tweet.createdAt))}</span>
            </div>
            <BsThreeDots onClick={handleOpenTweetMenu} className="tweet-header__button" />
            <Menu id="long-menu" anchorEl={anchorEl} open={open} onClose={handleCloseTweetMenu} >
              <MenuItem onClick={handleCloseTweetMenu}>Edit</MenuItem>
              <MenuItem onClick={handleRemoveTweet}>Remove tweet</MenuItem>
            </Menu>
          </div>

          <div className="tweet-content">
            <span className="tweet-content__text">
              {tweet.text}
            </span>
          </div>
          {tweet.retweet && (
            <div className="tweet-content__retweet">
              <ReTweet retweet={tweet.retweet} />
            </div>
          )}
          <div className="tweet-footer">
            <div className="tweet-footer__container container-reply">
              <div className="tweet-footer__action-wrapper wrapper--blue">
                <BiMessageRounded className="tweet-footer__icon" />
              </div>
              <span className="tweet-footer__quantity">11</span>
            </div>
            <div className="tweet-footer__container container-retweet">
              <div onClick={handleClickOpenAddTweetModal} className="tweet-footer__action-wrapper wrapper--green">
                <AiOutlineRetweet className="tweet-footer__icon" />
              </div>
              <span className="tweet-footer__quantity">22</span>
            </div>
            <div
              className={
                tweet.favorite ?
                  "tweet-footer__container container-like liked" :
                  "tweet-footer__container container-like"
              }
            >
              <div onClick={handleClickLike} className="tweet-footer__action-wrapper wrapper--red">
                <AiOutlineHeart className="tweet-footer__icon" />
              </div>
              <span className="tweet-footer__quantity">{tweet.likes.length}</span>
            </div>
            <div className="tweet-footer__action-wrapper wrapper--blue">
              <BsUpload className="tweet-footer__icon" />
            </div>
          </div>
        </div>
      </div>
      {visibleAddTweetModal && (
        <ModalWindow onClose={handleCloseAddTweetModal}>
          <AddTweetForm defaultDraftRowsValue={2} isRetweet={true} retweet={tweet} />
        </ModalWindow>
      )}
    </div>
  );
};

export default Tweet;
