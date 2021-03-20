import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { followUser } from '../../../store/ducks/user/actionCreators';
import { selectDataOfUser } from '../../../store/ducks/user/selectors';
import './FollowButton.scss';

interface IFollowButtonProps {
  followedByMeUserId: string;
}

const FollowButton: React.FC<IFollowButtonProps> = ({
  followedByMeUserId
}: IFollowButtonProps) => {
  const dispatch = useDispatch();
  const currentUserData = useSelector(selectDataOfUser);
  let isFollowed;

  console.log(currentUserData);

  if (currentUserData) {
    isFollowed = currentUserData.following.includes(followedByMeUserId.toString());
  }

  const handleClickFollow = () => {
    dispatch(followUser({ followedByMeUserId }));
  };

  return (
    <div className="follow-button">
      {isFollowed ? (
        <button onClick={handleClickFollow} className='followed'>Following</button>
      ) : (
          <button onClick={handleClickFollow}>Follow</button>
        )}
    </div>
  );
};

export default FollowButton;
