import React from 'react';
import { Route } from 'react-router-dom';

import './index.scss';
import { WiStars } from 'react-icons/wi';
import { BackButton } from '../../components/common/BackButton';
import Trend from '../../components/common/Trend/Trend';

const Trends: React.FC = () => {

  return (
    <div className="trends-wrapper">
      <div className="trends-header">
        <span className="trends-header__title"><BackButton />Trends</span>
        <WiStars className="trends-header__icon" />
      </div>
      <Route path="/trends" exact>
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
      </Route>
    </div>
  );
};

export default Trends;
