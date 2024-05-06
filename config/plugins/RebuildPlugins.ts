import webpack, { WebpackPluginInstance } from 'webpack';
import { appEnv } from '../env-config/envs';

export default (): WebpackPluginInstance[] => [
	new webpack.DefinePlugin(appEnv),
]