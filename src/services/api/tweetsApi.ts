import axios from '../../core/axios';
import { ITweet } from '../../store/ducks/tweets/contracts/state';

interface Response<T> {
  status: string;
  data: T;
}

export const TweetsApi = {
  async fetchDataOfTweets(userId?: string): Promise<ITweet[]> {
    const { data } = await axios.get<Response<ITweet[]>>(
      userId ? `/tweets/user/${userId}` : '/tweets/',
    );
    return data.data;
  },

  async fetchDataOfTweet(id: string): Promise<ITweet> {
    const { data } = await axios.get<Response<ITweet>>(`/tweets/${id}`);
    return data.data;
  },

  async addTweet(payload: { text: string, images: string[] }): Promise<ITweet> {
    const { data } = await axios.post<Response<ITweet>>('/tweets/', payload);
    return data.data;
  },

  removeTweet: (id: string): Promise<void> => axios.delete(`tweets/${id}`),
};
