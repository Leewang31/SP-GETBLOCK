import { KEYS } from './constants-keys';

export const APP_ENV_TYPE = {
  DEV: 'development',
  STAGE: 'staging',
  PROD: 'production',
};

const AppConfig = {
  ENV: APP_ENV_TYPE.STAGE,
  API_SERVER: 'https://api-stage.apoc.day/api/v2',
  CHAT_URL: 'https://chat-stage.apoc.day',
  FRONT_HOST: 'https://stage.apoc.day/#/',
  AUTHOR_HOST: 'https://author-stage.apoc.day/#/',
  FILE_SERVER: 'https://cdn.grabthecrack.com/',
  KEYS,
};
export default AppConfig;
