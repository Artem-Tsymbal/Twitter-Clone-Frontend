import axios from 'axios';
import { ILoginFormProps } from '../../pages/SignIn/components/LoginModal';

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
  async getMe(): Promise<ResponseApi> {
    const { data } = await axios.get<ResponseApi>('/users/me');
    return data;
  },
};
