import Router from './routes';
import Middleware from './middlewares';

const { RemoteServer, Auth } = Middleware;

const forwards = {
  RemoteServer,
  Auth,
};

const OpenRoute = new Router.Open(forwards);
const GetRoute = new Router.Get(forwards);
const PostRoute = new Router.Post(forwards);
const PatchRoute = new Router.Patch(forwards);

const DefaultApi = {
  OpenRoute,
  GetRoute,
  PostRoute,
  PatchRoute,
};

export const DirectSupport = {
  OpenRoute,
  GetRoute,
};

export default DefaultApi;
