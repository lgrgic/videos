import axios from 'axios';

const KEY = 'AIzaSyCiuOc7YuWEEceFu3ymifFF7rMPQDVL1EE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
