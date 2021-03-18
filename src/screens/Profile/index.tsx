/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import enLang from 'date-fns/locale/en-GB';
import { WiStars } from 'react-icons/wi';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Box, Typography } from '@material-ui/core';
import { BsCalendar } from 'react-icons/bs';
import { selectDataOfUser } from '../../store/ducks/user/selectors';
import { AuthApi } from '../../services/api/authApi';
import { fetchDataOfTweets } from '../../store/ducks/tweets/actionCreators';
import { selectItemsOfTweets } from '../../store/ducks/tweets/selectors';
import { IUser } from '../../store/ducks/user/contracts/state';
import './index.scss';
import { BackButton } from '../../components/common/BackButton';
import Tweet from '../../components/common/Tweet/Tweet';
import ModalWindow from '../../components/common/ModalWindow/ModalWindow';
import SetUpProfile from './components/SetUpProfile/SetUpProfile';
import Avatar from '../../components/shared/Avatar/Avatar';

type TParams = { id: string };

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
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
          <Typography component={'div'}>{children}</Typography>
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

  const [value, setValue] = React.useState(0);
  const [userData, setUserData] = React.useState<IUser | undefined>();
  const [visibleSetUpModal, setVisibleSetUpModal] = React.useState<boolean>(false);

  const currentUserData = useSelector(selectDataOfUser);
  const tweets = useSelector(selectItemsOfTweets);

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

    dispatch(fetchDataOfTweets());
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
    <div className="profile">
      <div className="profile-header">
        <div className="profile-header-wrapper">
          <BackButton />
          <div className="profile-header-container">
            <span className="profile-header__title">{userData?.fullName}</span>
            <span className="profile-header__quantity">{tweets.length} Tweets</span>
          </div>
        </div>
        <WiStars className="profile-header__icon" />
      </div>
      <div className="profile-user">
        <div className="profile-user-background">
          <img src={userData?.background} alt="Header background" />
        </div>
        <div className="profile-user-info">
          <div className="profile-user-header">
            <div className="profile-user-avatar">
              <Avatar
                size='large'
                fullName={userData?.fullName}
                avatar={userData?.avatar}
                id={userData?._id}
                response={true}
              />
            </div>
            <div className="profile-user-buttons">
              <button onClick={handleClickOpenSetUpModal}>Set up profile</button>
              {/* <button>Follow</button> */}
            </div>
          </div>

          <div className="profile-user-fullname">{userData?.fullName}</div>
          <div className="profile-user-username">@{userData?.username}</div>
          <div className="profile-user-biography">{userData?.biography}</div>
          {
            userData?.createdAt && <div className="profile-user-joined-date">
              <BsCalendar />Joined {format(new Date(userData.createdAt), 'MMMM y', { locale: enLang })}
            </div>
          }
          <div className="profile-user-details">
            <div className="profile-user-details-item">
              <span className="profile-user-details__quantity">31.4K</span>
              <span className="profile-user-details__title">Following</span>
            </div>
            <div className="profile-user-details-item">
              <span className="profile-user-details__quantity">31.4K</span>
              <span className="profile-user-details__title">Folowers</span>
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
            tweets
              .filter(tweet => !tweet.replyingTo)
              .map(tweet => (
                <Tweet key={tweet._id} tweet={tweet} />
              ))
          }
        </TabPanel>
        <TabPanel value={value} index={1}>
          {
            tweets
              .filter(tweet => tweet.replyingTo)
              .map(tweet => (
                <>
                  {tweet.replyingTo && <Tweet key={tweet.replyingTo._id} tweet={tweet.replyingTo} isReply={true} />}
                  <Tweet key={tweet._id} tweet={tweet} />
                </>
              ))
          }
        </TabPanel>
        <TabPanel value={value} index={2}>
          {
            tweets
              .filter(tweet => tweet.images?.length)
              .map(tweet => (
                <Tweet key={tweet._id} tweet={tweet} />
              ))
          }
        </TabPanel>
      </div>
      {visibleSetUpModal && (
        <ModalWindow onClose={handleCloseSetUpModal}>
          <SetUpProfile userData={userData} onClose={handleCloseSetUpModal} />
        </ModalWindow>
      )}
    </div >
  );
};

export default Profile;
