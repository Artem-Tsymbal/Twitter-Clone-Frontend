import React from 'react';
import { Route } from 'react-router-dom';

import './index.scss';
import { WiStars } from 'react-icons/wi';
import { BackButton } from '../../components/common/BackButton';
import ConnectPerson from '../../components/common/ConnectPerson/ConnectPerson';

const ConnectPeople: React.FC = () => {
  return (
    <div className="connect-people-wrapper">
      <div className="connect-people-header">
        <span className="connect-people-header__title"><BackButton />Connect</span>
        <WiStars className="connect-people-header__icon" />
      </div>
      <div className="connect-people-header sub-header">
        <span className="connect-people-header__title">Suggested for you</span>
      </div>

      <Route path="/connect_people" exact>
        <ConnectPerson />
        <ConnectPerson />
        <ConnectPerson />
      </Route>
    </div>
  );
};

export default ConnectPeople;
