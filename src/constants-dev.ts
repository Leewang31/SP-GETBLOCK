import { KEYS } from './constants-keys';

export const APP_ENV_TYPE = {
	DEV: 'development',
	STAGE: 'staging',
	PROD: 'production',
};

const AppConfig = {
	ENV: APP_ENV_TYPE.DEV,
	API_SERVER: 'https://api-dev.apoc.day/api/v2',
	CHAT_URL: 'https://chat-dev.apoc.day',
	FRONT_HOST: 'https://dev.apoc.day/#/',
	AUTHOR_HOST: 'https://author-dev.apoc.day/#/',
	FILE_SERVER: 'https://cdn.grabthecrack.com/',
	KEYS,
};
export default AppConfig;
