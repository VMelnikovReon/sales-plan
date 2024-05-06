import webpack, { WebpackPluginInstance } from 'webpack';
import scriptJs from '../assets/scriptJs';
import { GenerateTextAssetPlugin } from '../custom-plugins/GenerateTextAssetPlugin';
import ZipPlugin from '../custom-plugins/WidgetZipPlugin';
import { appEnv } from '../env-config/envs';

export default (zipName: string, bundlePath: string): WebpackPluginInstance[] => [
	new ZipPlugin({
		outputFile: zipName,
		targetDir: bundlePath,
		exclude: [/widget.zip/, /index[.]js.*/],
	}),
	new webpack.DefinePlugin(appEnv),
	new GenerateTextAssetPlugin({
		outputFile: 'script.js',
		content: scriptJs,
		args: [`${process.env.DEV_MODULE_URL}/index.js`],
	}),
]