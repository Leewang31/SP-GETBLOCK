import { KEYS } from './constants-keys';

export const APP_ENV_TYPE = {
	DEV: 'development',
	STAGE: 'staging',
	PROD: 'production',
};

const AppConfig = {
	ENV: APP_ENV_TYPE.PROD,
	API_SERVER: 'https://api.apoc.day/api/v2',
	CHAT_URL: 'https://chat.apoc.day',
	FRONT_HOST: 'https://www.apoc.day/#/',
	AUTHOR_HOST: 'https://author.apoc.day/#/',
	FILE_SERVER: 'https://cdn.grabthecrack.com/',
	KEYS,
};
export default AppConfig;
