import dotenv from 'dotenv';
import { Env } from './env.type';

dotenv.config({ path: `${process.env.ENV_FILENAME}.env` });

export const appEnv: Env = {
	ENV_SERVER_URL: JSON.stringify(process.env.SERVER_URL),
	ENV_WIDGET_CONTROLLER_URL: JSON.stringify(process.env.WIDGET_CONTROLLER_URL),
	ENV_WIDGET_API_ENDPOINT: JSON.stringify(process.env.WIDGET_API_ENDPOINT),
	ENV_INTEGRATION_NAME: JSON.stringify(process.env.INTEGRATION_NAME),
	ENV_WEBSOCKET_ENDPOINT: JSON.stringify(process.env.WEBSOCKET_ENDPOINT),
	ENV_WEBSOCKET_URL: JSON.stringify(process.env.WEBSOCKET_URL)
};