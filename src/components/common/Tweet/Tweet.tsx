import React from 'react';
import './Tweet.scss';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { removeTweet } from '../../../store/ducks/tweets/actionCreators';
import { formatDate } from '../../../utils/formatDate';

import { BiMessageRounded } from 'react-icons/bi';
import { BsThreeDots, BsUpload } from 'react-icons/bs';
import { AiOutlineRetweet, AiOutlineHeart } from 'react-icons/ai';
import { Menu, MenuItem } from '@material-ui/core';
import Avatar from '../../shared/Avatar/Avatar';

interface ITweetProps {
  _id: string;
  text: string;
  createdAt: string;
  images?: string[];
  user: {
    fullName: string;
    username: string;
    avatar?: string;
  };
}

const Tweet: React.FC<ITweetProps> = ({
  _id,
  text,
  user,
  images,
  createdAt,
}: ITweetProps) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const history = useHistory();

  const handleClickTweet = (event: React.MouseEvent<HTMLAnchorElement>): void => {
    event.preventDefault();
    history.push(`/home/tweet/${_id}`);
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
      dispatch(removeTweet(_id));
    }
  };

  return (
    <div className="tweet">
      <a onClick={handleClickTweet} className="tweet__wrapper" href={`/home/tweet/${_id}`}>

        <div className="tweet__avatar-container">
          <Avatar size='middle' fullName={user?.fullName} avatar={user?.avatar} response={false} />
        </div>

        <div className="tweet__body">

          <div className="tweet-header">
            <div className="tweet-header__info">
              <span className="tweet-header__fullName">{user.fullName}</span>
              <span className="tweet-header__username">@{user.username}</span>
              <span className="tweet-header__time tweet-header__time-dot">·</span>
              <span className="tweet-header__time">{formatDate(new Date(createdAt))}</span>
            </div>
            <BsThreeDots onClick={handleOpenTweetMenu} className="tweet-header__button" />
            <Menu id="long-menu" anchorEl={anchorEl} open={open} onClose={handleCloseTweetMenu} >
              <MenuItem onClick={handleCloseTweetMenu}>Edit</MenuItem>
              <MenuItem onClick={handleRemoveTweet}>Remove tweet</MenuItem>
            </Menu>
          </div>

          <div className="tweet-content">
            <span className="tweet-content__text">
              {text}
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
      </a>
    </div>
  );
};

export default Tweet;
