import axios from 'axios';

class Http {
  instance: any;

  constructor(baseURL: string, headers: any) {
    this.instance = axios.create({ baseURL, headers });
  }
}
export default Http;
