import axios from "axios";
import { ITweetsState } from "../../store/ducks/tweets/contracts/state";

export const TweetsApi = {
  fetchTweets(): Promise<ITweetsState['items']> {
    return axios.get('https://trycode.pw/c/5MJC7.json').then(({ data }) => data);
  },
};
