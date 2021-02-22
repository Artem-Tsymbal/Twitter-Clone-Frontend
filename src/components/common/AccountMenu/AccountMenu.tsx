import React from 'react';
import './AccountMenu.scss';
import { BsThreeDots } from 'react-icons/bs';
import { HiOutlineCheck } from 'react-icons/hi';
import { VscTriangleDown } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

const AccountMenu: React.FC = () => {
  return (
    <div className="account-menu-wrapper">
      <div className="account-menu-modal">

        <div className="account-menu-button account-menu-modal__item">
          <div className="main-info-wrapper">
            <div className="account-menu__image" />
            <div className="account-menu-content">
              <span className="account-menu-content__fullName">ArtyomTsymbal</span>
              <span className="account-menu-content__username">@TsymbalArtyom</span>
            </div>
          </div>
          <HiOutlineCheck className="account-menu__icon account-menu-modal__icon" />
        </div>

        <Link to={'/home'} className="account-menu-modal__item">
          <span className="account-menu-modal__text">My profile</span>
        </Link>
        <div className="account-menu-modal__item">
          <span className="account-menu-modal__text">Log out</span>
        </div>
        <div className="account-menu-modal__item">
          <span className="account-menu-modal__text">Switch theme</span>
        </div>
        <div className="account-menu-modal__item">
          <span className="account-menu-modal__text">Switch language</span>
        </div>
        <VscTriangleDown className="account-menu-modal__triangle" />
      </div>

      <div className="account-menu-button">
        <div className="main-info-wrapper">
          <div className="account-menu__image"></div>
          <div className="account-menu-content">
            <span className="account-menu-content__fullName">ArtyomTsymbal</span>
            <span className="account-menu-content__username">@TsymbalArtyom</span>
          </div>
        </div>
        <BsThreeDots className="account-menu__dots" />
      </div>
    </div>
  );
};

export default AccountMenu;
