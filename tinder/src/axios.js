import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://kindling-tinder-clone.herokuapp.com'
});

export default instance;
