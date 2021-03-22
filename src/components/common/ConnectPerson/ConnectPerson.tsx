import React from 'react';
import FollowButton from '../../shared/FollowButton/FollowButton';
import './ConnectPerson.scss';
import { IUser } from '../../../store/ducks/user/contracts/state';
import Avatar from '../../shared/Avatar/Avatar';

interface IConnectPersonProps {
  isWhoToFollowBlock?: boolean;
  user: IUser;
}

const ConnectPerson: React.FC<IConnectPersonProps> = ({
  isWhoToFollowBlock,
  user
}: IConnectPersonProps) => {
  let option;

  if (isWhoToFollowBlock) {
    option = {
      alignItems: 'center',
    };
  }

  return (
    <div className="connect-person">
      <div className="connect-person-wrapper">
        <div className="connect-person-avatar">
          <Avatar size='middle' fullName={user.fullName} avatar={user.avatar} id={user._id} response={true} />
        </div>
        <div className="connect-person-desc">
          <span className="connect-person__fullName">{user.fullName}</span>
          <span className="connect-person__username">@{user.username}</span>
          {!isWhoToFollowBlock && <span className="connect-person__bio">{user.biography}</span>}
        </div>
      </div>
      <div className="connect-person-button" style={option}>
        {user._id && <FollowButton size='middle' followedByMeUserId={user._id} />}
      </div>
    </div >
  );
};

export default ConnectPerson;
