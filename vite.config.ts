import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import 'dotenv/config';
import { appEnv } from './config/env-config/envs';
import path from 'path';

export default defineConfig({
	plugins: [ react() ],
	define: appEnv,
	resolve: {
		alias: {
			shared: path.resolve(__dirname, 'src', 'shared'),
			entities: path.resolve(__dirname, 'src', 'entities'),
			app: path.resolve(__dirname, 'src', 'app'),
		},
	},
});
