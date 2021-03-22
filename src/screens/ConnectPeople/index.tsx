import React from 'react';
import { Route } from 'react-router-dom';

import './index.scss';
import { WiStars } from 'react-icons/wi';
import { BackButton } from '../../components/common/BackButton';
import ConnectPerson from '../../components/common/ConnectPerson/ConnectPerson';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataOfConnectPeople } from '../../store/ducks/connectPeople/actionCreators';
import { selectItemsOfConnectPeople } from '../../store/ducks/connectPeople/selectors';
import { selectDataOfUser } from '../../store/ducks/user/selectors';

const ConnectPeople: React.FC = () => {
  const dispatch = useDispatch();
  let users = useSelector(selectItemsOfConnectPeople);
  const currentUserData = useSelector(selectDataOfUser);
  if (currentUserData) {
    users = users.filter(item => item._id !== currentUserData._id);
  }


  React.useEffect(() => {
    dispatch(fetchDataOfConnectPeople());
  }, []);

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
        {users.map(item => {
          return (
            <ConnectPerson key={item._id} user={item} />
          );
        })}
      </Route>
    </div>
  );
};

export default ConnectPeople;
