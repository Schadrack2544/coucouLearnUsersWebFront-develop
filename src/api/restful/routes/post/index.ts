/* eslint-disable no-underscore-dangle */
class Post {
  SERVER: any;

  _Auth: any;

  constructor({ RemoteServer, Auth }) {
    this.SERVER = RemoteServer.instance;
    this._Auth = Auth;
  }

  async postRoute(endpoint: string, req?: object) {
    this._Auth.customHeader(this.SERVER);

    return this.SERVER.post(endpoint, req)
      .then(res => ({ data: res.data || res }))
      .catch(err => ({
        error: err.response?.data || err.response || err,
      }));
  }
}
export default Post;
