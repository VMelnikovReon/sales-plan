import { AxiosError } from 'axios';
import { CSSProperties } from 'react';
import { Root } from 'react-dom/client';
import { YesOrNot } from 'shared/types/AMO.types';

export type WidgetSettings = {
	params: {
		active: YesOrNot
		category_code: string
		client_name: string
		id: number
		images_path: string
		oauth_client_uuid: string
		path: string
		phone_number: number
		status: string
		version: string
		widget_active: YesOrNot
		widget_code: string
		terms_of_use: boolean

	}
}

export type ControllerData = {
	userName: string,
	userPhone: string,
	account: string,
	widgetName: string,
	termsOfUse: string,
	accountSubdomain: string,
	widgetStatus: string,
	client_uuid: string,
	enumId: number
}

type WidgetSelf = {
	get_settings(): WidgetSettings
}

export type WidgetSchema = {
	render: () => Promise<boolean>;
	init: () => Promise<boolean>;
	settings: () => boolean;
	dpSettings: (
		formInput: HTMLInputElement,
		saveButton: HTMLButtonElement,
	) => Promise<boolean>;
	onSave: (self: WidgetSettings) => Promise<boolean>;
	initMenuPage: () => Promise<boolean>;
	destroy?: () => void
};

export enum ReactRootIds {
	APP = 'app',
	DIGITAL_PIPELINE = 'dp',
	DEV = 'dev',
	REQUEST = 'request',
	SETTINGS = 'settings',
}

export type ReactRootStoreType = {
	[key in ReactRootIds]?: Root
}

export type SVGProps = {
	color?: string
	size?: string | number
	cx?: number
	cy?: number
	style?: CSSProperties
}

export type SWRError = AxiosError<{ message?: string }>

export type PopulatedModel<T, U> = Omit<T, keyof U> & U;