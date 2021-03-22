import axios from 'axios';
import { ILoginFormProps } from '../../screens/Login/components/LoginModal';
import { IRegisterFormProps } from '../../screens/Login/components/RegisterModal';
import { IFollowUser, IUpdateDataOfUser } from '../../store/ducks/user/contracts/state';

interface ResponseApi {
  status: string;
  data: any;
}

export const AuthApi = {
  async signIn(postData: ILoginFormProps): Promise<ResponseApi> {
    const { data } = await axios.post<ResponseApi>('/auth/login', {
      username: postData.email,
      password: postData.password,
    });
    return data;
  },

  async signUp(postData: IRegisterFormProps): Promise<ResponseApi> {
    const { data } = await axios.post('/auth/register', {
      email: postData.email,
      username: postData.username,
      fullName: postData.fullName,
      password: postData.password,
      password2: postData.password2,
    });
    return data;
  },

  async verify(hash: string): Promise<ResponseApi> {
    const { data } = await axios.get(`auth/verify?hash=${hash}`);
    return data;
  },
};
