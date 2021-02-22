import React from 'react';
import './index.scss';
import AppTapBar from '../../common/AppTapBar/AppTapBar';
import AccountMenu from '../../common/AccountMenu/AccountMenu';
import SearchBox from '../../common/SearchBox/SearchBox';
import TrendsForYou from '../../common/TrendsForYou/TrendsForYou';
import WhoToFollow from '../../common/WhoToFollow/WhoToFollow';
import ServiceUsage from '../../common/ServiceUsage/ServiceUsage';
import { Home } from '../../../screens/Home';
export const DefaultLayout: React.FC = () => {

  return (
    <div className="wrapper">
      <header className="left-side">
        <div className="sidebar">
          <div className="sidebar-bar">
            <AppTapBar />
          </div>
          <AccountMenu />
        </div>
      </header>
      <main className="main-side">
        <div className="content-container">
          <div className="primary-column">
            <Home />
          </div>
          <div className="sidebar-column">
            <SearchBox />
            <TrendsForYou />
            <WhoToFollow />
            <ServiceUsage />
          </div>
        </div>
      </main >
      <nav className="bottom-bar">
        sd
      </nav>
    </div>
  );
};
