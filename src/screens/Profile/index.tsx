/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AuthApi } from '../../services/api/authApi';
import { fetchDataOfTweets } from '../../store/ducks/tweets/actionCreators';
import { selectItemsOfTweets } from '../../store/ducks/tweets/selectors';
import { IUser } from '../../store/ducks/user/contracts/state';
import { format } from 'date-fns';
import enLang from 'date-fns/locale/en-GB';

import './index.scss';
import { WiStars } from 'react-icons/wi';
import { BackButton } from '../../components/common/BackButton';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Tweet from '../../components/common/Tweet/Tweet';
import { Box, Typography } from '@material-ui/core';
import ModalWindow from '../../components/common/ModalWindow/ModalWindow';
import SetUpProfile from '../../components/common/SetUpProfile/SetUpProfile';
import { selectDataOfUser } from '../../store/ducks/user/selectors';

type TParams = { id: string };

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={4}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const Profile: React.FC = () => {
  const { id } = useParams<TParams>();
  const dispatch = useDispatch();
  const [userData, setUserData] = React.useState<IUser | undefined>();
  const currentUserData = useSelector(selectDataOfUser);
  const [value, setValue] = React.useState(0);
  const tweets = useSelector(selectItemsOfTweets);
  const [visibleSetUpModal, setVisibleSetUpModal] = React.useState<boolean>(false);

  React.useEffect(() => {
    dispatch(fetchDataOfTweets());
  }, []);

  React.useEffect(() => {
    if (id) {
      if (id === currentUserData?._id) {
        setUserData(currentUserData);
      } else {
        AuthApi.getUserInfo(id).then(({ data }) => {
          setUserData(data);
        });
      }
    }
  }, [currentUserData]);

  const handleClickOpenSetUpModal = () => {
    setVisibleSetUpModal(true);
  };

  const handleCloseSetUpModal = () => {
    setVisibleSetUpModal(false);
  };

  const handleChangeTab = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="header-wrapper">
          <BackButton />
          <div className="header-container">
            <span className="header__title">{userData?.fullName}</span>
            <span className="header__quantity">{tweets.length} Tweets</span>
          </div>
        </div>
        <WiStars className="header__icon" />
      </div>
      <div className="user">
        <div className="user-background">
          <img src={userData?.background} alt="Header background"></img>
        </div>
        <div className="user-info">
          <div className="user-header">
            <div className="user-avatar">
              <img src={userData?.avatar} alt="Avatar"></img>
            </div>
            <div className="user-buttons">
              <button onClick={handleClickOpenSetUpModal}>Set up profile</button>
              {/* <button>Follow</button> */}
            </div>
          </div>

          <div className="user-fullname">{userData?.fullName}</div>
          <div className="user-username">@{userData?.username}</div>
          <div className="user-description">{userData?.biography}</div>
          <div className="user-joined-date">
            {/* {format(new Date(userData.), 'H:mm', { locale: enLang })} */}
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

        <Tabs
          variant="fullWidth"
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChangeTab}
        >
          <Tab label="Tweets" {...a11yProps(0)} />
          <Tab label="Tweets & replies" {...a11yProps(1)} />
          <Tab label="Media" {...a11yProps(2)} />
          <Tab label="Likes" {...a11yProps(3)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          {
            tweets.map(tweet => (
              <Tweet key={tweet._id} images={tweet.images} {...tweet} />
            ))
          }
        </TabPanel>
      </div>
      {visibleSetUpModal && (
        <ModalWindow onClose={handleCloseSetUpModal}>
          <SetUpProfile userData={userData} />
        </ModalWindow>
      )}
    </div >
  );
};

export default Profile;
