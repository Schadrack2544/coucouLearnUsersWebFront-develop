import jwtDecode from 'jwt-decode';
import Secure from './secureLS';

export default (token = Secure.getToken()) => {
  try {
    const jwt: { exp: number } = jwtDecode(token);
    const now = new Date();
    if (now.getTime() > jwt.exp * 1000) {
      Secure.removeToken();
      return false;
    }
    return jwtDecode(token);
  } catch (error) {
    return false;
  }
};
