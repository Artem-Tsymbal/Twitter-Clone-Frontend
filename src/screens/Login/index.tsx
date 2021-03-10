import React from 'react';
import './index.scss';
import { Button } from '@material-ui/core';
import { FiSearch, FiMessageSquare } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';
import { BsPeople } from 'react-icons/bs';
import { useAuth } from '../../navigation/Auth/ProvideAuth';
import ServiceUsage from '../../components/common/ServiceUsage/ServiceUsage';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';

const Login: React.FC = () => {
  useAuth().isAuthenticated();
  const [visibleModal, setVisibleModal] = React.useState<'signUp' | 'signIn'>();

  const handleClickOpenSignUp = (event: React.MouseEvent<HTMLElement>): void => {
    event.stopPropagation();
    setVisibleModal('signUp');
  };

  const handleClickOpenSignIn = (event: React.MouseEvent<HTMLElement>): void => {
    event.stopPropagation();
    setVisibleModal('signIn');
  };

  const handleCloseModal = (): void => {
    setVisibleModal(undefined);
  };

  return (
    <div className="login__wrapper">
      <div className="login__body">
        <section className="image-side">
          <IoLogoTwitter color="primary" className="image-side__main-twitter-icon" />
          <ul className="image-side-list-info">
            <li className="image-side-list-info__item">
              <FiSearch className="image-side-list-info__icon" />
              <span>Follow your interests.</span>
            </li>
            <li className="image-side-list-info__item">
              <BsPeople className="image-side-list-info__icon" />
              <span>  Hear what people are talking about.</span>
            </li>
            <li className="image-side-list-info__item">
              <FiMessageSquare className="image-side-list-info__icon" />
              <span> Join the conversation.</span>
            </li>
          </ul>
        </section>
        <section className="login-side">
          <div className="login-side__wrapper">
            <IoLogoTwitter color="primary" className="login-side__twitter-icon" />
            <p className="login-side__title--main">
              See what is happening in the world right now
          </p>
            <p className="login-side__title--secondary" >
              Join the Twitter today.
          </p>
            <Button
              onClick={handleClickOpenSignUp}
              style={{ marginBottom: 15 }}
              variant="contained"
              color="primary"
              fullWidth>
              Sign Up
          </Button>
            <Button
              onClick={handleClickOpenSignIn}
              variant="outlined"
              color="primary"
              fullWidth>
              Log in
          </Button>
            {visibleModal === 'signUp' && (
              <RegisterModal onClose={handleCloseModal} />
            )}
            {visibleModal === 'signIn' && (
              <LoginModal onClose={handleCloseModal} />
            )}
          </div>
        </section>
      </div>
      <div className="login__footer">
        <ServiceUsage isFullContent={true} />
      </div>
    </div>
  );
};

export default Login;
