import { KEYS } from './constants-keys';

export const APP_ENV_TYPE = {
  DEV: 'development',
  STAGE: 'staging',
  PROD: 'production',
};

const AppConfig = {
  ENV: APP_ENV_TYPE.DEV,
  /**
   * API SERVER
   */
  API_SERVER: 'http://localhost:3300/api/v2',
  // API_SERVER: 'https://api-dev.apoc.day/api/v2',
  // API_SERVER: 'https://api-stage.apoc.day/api/v2',
  // API_SERVER: 'https://api.apoc.day/api/v2',
  /**
   * CHAT SERVER
   */
  // CHAT_SERVER: 'http://localhost:3400',
  CHAT_URL: 'https://chat-dev.apoc.day',
  // CHAT_URL: 'https://chat-stage.apoc.day',
  // CHAT_URL: 'https://chat.apoc.day',
  /**
   * FILE SERVER
   */
  FILE_SERVER: 'https://cdn.grabthecrack.com/',
  /**
   * APOC
   */
  FRONT_HOST: 'https://localhost:4000/#/',
  AUTHOR_HOST: 'https://localhost:4001/#/',
  /**
   * ETC
   */
  KEYS,
};
export default AppConfig;
