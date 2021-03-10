import React from 'react';
import './FullTweet.scss';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { removeTweet } from '../../../store/ducks/tweets/actionCreators';
import { useParams } from 'react-router-dom';
import { fetchDataOfTweet, setDataOfTweet } from '../../../store/ducks/tweet/actionCreators';
import { selectDataOfTweet } from '../../../store/ducks/tweet/selectors';
import { selectStatusOfTweetIsLoading } from '../../../store/ducks/tweet/selectors';
import { format } from 'date-fns';
import enLang from 'date-fns/locale/en-GB';

import { BiMessageRounded } from 'react-icons/bi';
import { BsThreeDots, BsUpload } from 'react-icons/bs';
import { AiOutlineRetweet, AiOutlineHeart } from 'react-icons/ai';
import { CircularProgress } from '@material-ui/core';
import { Menu, MenuItem } from '@material-ui/core';
import Avatar from '../../shared/Avatar/Avatar';

const FullTweet: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const tweetData = useSelector(selectDataOfTweet);
  const isLoading = useSelector(selectStatusOfTweetIsLoading);
  const params: { id?: string } = useParams();
  const { id } = params;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  React.useEffect(() => {
    if (id) {
      dispatch(fetchDataOfTweet(id));
    }

    return () => {
      dispatch(setDataOfTweet(undefined));
    };
  }, [dispatch, id]);


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
      if (id) {
        dispatch(removeTweet(id));
      }
    }
    history.goBack();
  };

  if (isLoading) {
    return (
      <CircularProgress />
    );
  }

  if (tweetData) {
    return (
      <div className="full-tweet">
        <div className="full-tweet__wrapper">

          <div className="full-tweet-header">
            <div className="full-tweet-header__info">
              <div className="full-tweet-header__avatar">
                <Avatar
                  size='middle'
                  fullName={tweetData.user.fullName}
                  avatar={tweetData.user.avatar}
                  id={tweetData.user._id}
                  response={true}
                />
              </div>
              <div className="full-tweet-header__body">
                <span className="full-tweet-header__fullName">{tweetData.user.fullName}</span>
                <span className="full-tweet-header__username">@{tweetData.user.username}</span>
              </div>
            </div>
            <BsThreeDots onClick={handleOpenTweetMenu} className="full-tweet-header__button" />
            <Menu id="long-menu" anchorEl={anchorEl} open={open} onClose={handleCloseTweetMenu} >
              <MenuItem onClick={handleCloseTweetMenu}>Edit</MenuItem>
              <MenuItem onClick={handleRemoveTweet}>Remove tweet</MenuItem>
            </Menu>
          </div>

          <div className="full-tweet__body">
            <div className="full-tweet-content">
              <span className="full-tweet-content__text">
                {tweetData.text}
              </span>
            </div>
            <div className="full-tweet-footer">
              <div className="full-tweet-footer__date">
                <span className="full-tweet-footer__title">{
                  format(new Date(tweetData.createdAt), 'H:mm', { locale: enLang })
                } · </span>
                <span className="full-tweet-footer__title">{
                  format(new Date(tweetData.createdAt), 'dd MMM. yyyy', { locale: enLang })
                }</span>
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
  }

  return null;
};


export default FullTweet;
