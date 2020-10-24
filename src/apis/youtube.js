import axios from 'axios';

const KEY = 'AIzaSyDdqW8vnZLoc7-bOisIFAudYeSX4AxgCMo';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});