/* eslint-disable no-underscore-dangle */
class Patch {
  SERVER: any;

  _Auth: any;

  constructor({ RemoteServer, Auth }) {
    this.SERVER = RemoteServer.instance;
    this._Auth = Auth;
  }

  async patchRoute(endpoint: string, req?: object) {
    this._Auth.customHeader(this.SERVER);

    return this.SERVER.patch(endpoint, req)
      .then(res => ({ data: res.data || res }))
      .catch(err => ({
        error: err.response?.data || err.response || err,
      }));
  }
}
export default Patch;
