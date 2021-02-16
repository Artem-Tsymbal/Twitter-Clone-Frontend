import axios from 'axios';
import { ILoginFormProps } from '../../pages/SignIn/components/LoginModal';
import { IRegisterFormProps } from '../../pages/SignIn/components/RegisterModal';

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

  async getMe(): Promise<ResponseApi> {
    const { data } = await axios.get<ResponseApi>('/users/me');
    return data;
  },
};
