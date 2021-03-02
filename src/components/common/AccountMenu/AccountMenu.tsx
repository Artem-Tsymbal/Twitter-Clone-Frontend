import React, { useRef } from 'react';
import './AccountMenu.scss';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectDataOfUser } from '../../../store/ducks/user/selectors';
import { useAuth } from '../../../navigation/Auth/ProvideAuth';

import { BsThreeDots } from 'react-icons/bs';
import { HiOutlineCheck } from 'react-icons/hi';
import { VscTriangleDown } from 'react-icons/vsc';

const AccountMenu: React.FC = () => {
  const [visibleModal, setVisibleModal] = React.useState<boolean>(false);
  const userData = useSelector(selectDataOfUser);
  const ref = useRef(null);
  const auth = useAuth();

  React.useEffect(() => {
    auth.updateCurrentUserState();
    return () => document.removeEventListener("click", handleClick);
  }, [auth]);

  function handleClick(event: MouseEvent) {
    if (!(ref.current! as any).contains(event.target)) {
      handleClosePopup();
    }
  }

  const handleOpenPopup = (event: React.MouseEvent<HTMLElement>): void => {
    event.stopPropagation();
    setVisibleModal(true);
    if (!visibleModal) {
      document.addEventListener("click", handleClick);
    }
  };

  const handleClosePopup = (): void => {
    document.removeEventListener("click", handleClick);
    setVisibleModal(false);
  };

  const handleSignOut = (): void => {
    auth.logOut();
  };

  if (!userData) {
    return null;
  }

  return (
    <div className="account-menu-wrapper">

      <div onClick={handleOpenPopup} className="account-menu-button">
        <div className="main-info-wrapper">
          <div className="account-menu__image"></div>
          <div className="account-menu-content">
            <span className="account-menu-content__fullName">{userData.fullName}</span>
            <span className="account-menu-content__username">@{userData.username}</span>
          </div>
        </div>
        <BsThreeDots className="account-menu__dots" />
      </div>

      {visibleModal && (
        <div ref={ref} className="account-menu-modal">
          <div className="account-menu-button account-menu-modal__item">
            <div className="main-info-wrapper">
              <div className="account-menu__image" />
              <div className="account-menu-content">
                <span className="account-menu-content__fullName">{userData.fullName}</span>
                <span className="account-menu-content__username">@{userData.username}</span>
              </div>
            </div>
            <HiOutlineCheck className="account-menu__icon account-menu-modal__icon" />
          </div>
          <Link to={`/user/${userData._id}`} className="account-menu-modal__item">
            <span className="account-menu-modal__text">My profile</span>
          </Link>
          <div onClick={handleSignOut} className="account-menu-modal__item">
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
      )}
    </div>
  );
};

export default AccountMenu;
