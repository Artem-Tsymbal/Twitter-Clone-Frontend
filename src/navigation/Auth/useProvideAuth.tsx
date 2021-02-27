import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signOut } from '../../store/ducks/user/actionCreators';

export interface IUseProvideAuth {
  isAuthenticated: () => void | boolean;
  logOut: () => void;
}

export function useProvideAuth(): IUseProvideAuth {
  const history = useHistory();
  const dispatch = useDispatch();

  const isAuthenticated = () => {
    let isAuthed = false;
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      isAuthed = !!JSON.parse(currentUser);
      if (isAuthed && history.location.pathname === '/login') {
        history.push('/home');
      } else if (isAuthed) {
        return isAuthed;
      }
    }
  };

  const logOut = () => {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('currentUser');
    dispatch(signOut());
  };

  return ({
    isAuthenticated,
    logOut,
  });
}
