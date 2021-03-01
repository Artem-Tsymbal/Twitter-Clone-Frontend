import React from 'react';
import './AppTapBar.scss';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectDataOfUser } from '../../../store/ducks/user/selectors';

import { GiFeather } from 'react-icons/gi';
import { CgMoreO } from 'react-icons/cg';
import { BiHomeCircle } from 'react-icons/bi';
import { HiOutlineHashtag } from 'react-icons/hi';
import { MdMailOutline, MdBookmarkBorder } from 'react-icons/md';
import { RiFileList2Line, RiUser6Line } from 'react-icons/ri';
import { IoLogoTwitter, IoMdNotificationsOutline } from 'react-icons/io';
import ModalWindow from '../ModalWindow/ModalWindow';
import AddTweetForm from '../AddTweetForm/AddTweetForm';

const AppTapBar: React.FC = () => {
  const [visibleAddTweetModal, setVisibleAddTweetModal] = React.useState<boolean>(false);
  const userData = useSelector(selectDataOfUser);

  const handleClickOpenAddTweetModal = () => {
    setVisibleAddTweetModal(true);
  };

  const onCloseAddTweetModal = () => {
    setVisibleAddTweetModal(false);
  };
  return (
    <>
      <div className="tap-bar-list">
        <Link to="/home" className="tap-bar-list__link tap-bar-list__logo">
          <div className="tap-bar-item">
            <IoLogoTwitter className="tap-bar-item__logo" />
          </div>
        </ Link>
        <Link to="/home" className="tap-bar-list__link">
          <div className="tap-bar-item">
            <BiHomeCircle className="tap-bar-item__icon" />
            <span className="tap-bar-item__text">Home</span>
          </div>
        </ Link>
        <Link to="/explore" className="tap-bar-list__link">
          <div className="tap-bar-item">
            <HiOutlineHashtag className="tap-bar-item__icon" />
            <span className="tap-bar-item__text">Explore</span>
          </div>
        </ Link>
        <Link to="/notifications" className="tap-bar-list__link">
          <div className="tap-bar-item">
            <IoMdNotificationsOutline
              className="tap-bar-item__icon"
              style={{ stroke: 'rgb(15, 20, 25)', strokeWidth: 1 }}
            />
            <span className="tap-bar-item__text">Notifications</span>
          </div>
        </ Link>
        <Link to="/messages" className="tap-bar-list__link">
          <div className="tap-bar-item">
            <MdMailOutline className="tap-bar-item__icon" />
            <span className="tap-bar-item__text">Messages</span>
          </div>
        </ Link >
        <Link to="/bookmarks" className="tap-bar-list__link bookmark">
          <div className="tap-bar-item">
            <MdBookmarkBorder className="tap-bar-item__icon" />
            <span className="tap-bar-item__text">Bookmarks</span>
          </div>
        </ Link >
        <Link to="/lists" className="tap-bar-list__link list">
          <div className="tap-bar-item">
            <RiFileList2Line className="tap-bar-item__icon" />
            <span className="tap-bar-item__text">Lists</span>
          </div>
        </ Link >
        <Link to={`/user/${userData?._id}`} className="tap-bar-list__link">
          <div className="tap-bar-item">
            <RiUser6Line className="tap-bar-item__icon" />
            <span className="tap-bar-item__text">Profile</span>
          </div>
        </ Link >
        <div className="tap-bar-list__link">
          <div className="tap-bar-item">
            <CgMoreO className="tap-bar-item__icon" />
            <span className="tap-bar-item__text">More</span>
          </div>
        </ div >
      </div >
      <div className="button-wrapper">
        <button onClick={handleClickOpenAddTweetModal} className="tap-bar-button">
          <GiFeather className="tap-bar-button__icon" />
          <span className="tap-bar-button__text">Tweet</span>
        </button>
      </div>
      <ModalWindow visible={visibleAddTweetModal} onClose={onCloseAddTweetModal}>
        <AddTweetForm defaultDraftRowsValue={4} />
      </ModalWindow>
    </>
  );
};

export default AppTapBar;
