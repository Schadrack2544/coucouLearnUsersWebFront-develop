import Constants from 'api/utils/constants';
import Factory from 'core/factory';

const RemoteServer = new Factory.Http(
  Constants.Keys.DEFAULT_API,
  Constants.Config.HTTP_HEADERS,
);

export default RemoteServer;
