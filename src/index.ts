import 'babel-polyfill';
import * as express from 'express';
import { connectDatabase } from './models/index';
import { setupNconf } from './utils/conf';
import config from './utils/conf';
import Logger from './utils/Logger';
import mongodbURL from './utils/mongodbURL';

const app = express();

connectDatabase(mongodbURL(config.get('database:host'), config.get('database:port'), config.get('database:table')))
  .then(() => {
    Logger.info('Database connect success!');
  })
  .catch((err) => {
    Logger.error('Unable to connect to the database!\n', err);
  });

const server = app.listen(config.get('server:port') || 3000, () => {
  const host = server.address().address;
  const port = server.address().port;

  Logger.info('Example app listening at http://%s:%s', host, port);
});