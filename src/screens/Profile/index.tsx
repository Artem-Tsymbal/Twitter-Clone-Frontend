import React from 'react';
import { format } from 'date-fns';
import enLang from 'date-fns/locale/en-GB';

import './index.scss';
import { WiStars } from 'react-icons/wi';
import { BackButton } from '../../components/common/BackButton';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<number>(0);

  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <div className="container">
      <div className="header">
        <span className="header__title"><BackButton />Artem</span>
        <WiStars className="header__icon" />
      </div>
      <div className="user">
        <div className="user-header">
          <img src={'sdds'} alt="Header background"></img>
        </div>
        <div className="user-info">
          <div className="user-avatar">
            <img src={'sdds'} alt="Avatar"></img>
          </div>
          <div className="user-fullname">
            fddfgf
          </div>
          <div className="user-username">
            fddfs
          </div>
          <div className="user-description">
            dfs
          </div>
          <div className="user-joined-date">
            {/* {format(new Date('sddsds'), 'H:mm', { locale: enLang })} */}
          </div>
          <div className="user-details">
            <div className="user-details-item">
              <span className="user-details__quantity">31.4K</span>
              <span className="user-details__title">Following</span>
            </div>
            <div className="user-details-item">
              <span className="user-details__quantity">31.4K</span>
              <span className="user-details__title">Folowers</span>
            </div>
          </div>
        </div>
        <Tabs value={activeTab} indicatorColor="primary" textColor="primary" onChange={handleChange}>
          <Tab label="Tweets" />
          <Tab label="Tweets & replies" />
          <Tab label="Media" />
          <Tab label="Likes" />
        </Tabs>
        <div className="user-tweets">
        </div>
      </div>

    </div>
  );
};

export default Profile;
