
export enum EnvTypes {
	PROD = 'production',
	DEV = 'development',
	TEST = 'test',
	REBUILD = 'rebuild'
}

export type ConfigEnvironment = {
	mode: EnvTypes
}
