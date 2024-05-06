import { WidgetSettings } from './Widget.types';

export enum YesOrNot {
	Yes = 'Y',
	No = 'N'
}

export type AmoManagers = {
	[key: string]: AmoManager
}

export type AmoManager = {
	id: string;
	title: string;
	option: string;
	active: boolean;
	login: string;
	status: string;
	is_admin: YesOrNot;
	free_user: YesOrNot;
	amojo_id: string;
	amo_profile_id: string;
	avatar: string;
	group: string;
	theme?: number;
	online?: boolean;
}

export type Pipeline = {
	_embedded: {
		pipelines: ({
			id: number
			name: string
		} & PipelineStatuses)[]
	}
}

export type PipelineStatuses = {
	_embedded: {
		statuses: {
			id: number
			name: string
		}[]
	}
}

export type Manager = {
	id: string;
	name: string;
	group: string;
	isAdmin: boolean;
};

export type DefaultAmoValuesType = {
	[key: string]: string[];
};

export type AmoConstant = {
	managers: AmoManagers
	groups: {
		[id: string]: string;
	};
	account: {
		id: number;
		subdomain: string;
		timezone: string
		cf: {
			[id: string]: AMOCustomField;
		};
	};
	task_types: {
		[keyName: string]: TaskTypes;
	};
	user: {
		id: number;
	};
};

export type AMOCustomField = {
	ID: number;
	NAME: string;
	TYPE_ID: number;
	ACCOUNT_ID: number;
	DESCRIPTION: string | null;
	CODE: number | null;
	SORT: number;
	ENTREE_COMPANY: number;
	ENTREE_CATALOG: number;
	ENTREE_CUSTOMERS: number;
	PREDEFINED: YesOrNot;
	MULTIPLE: YesOrNot;
	DISABLED: number;
	ORIGIN: number | null;
	CATALOG_ID: number | null;
	SETTINGS: CustomFieldSettings;
	deleted_at: number | null;
	ELEMENT_TYPES: {
		[index: number]: number;
	};
	ENTREE_DEALS: number;
	ENTREE_CONTACTS: number;
	TYPE_CODE: string;
	'~NAME': string;
	ENUMS?: {
		[id: number]: {
			ID: number;
			VALUE: string;
			'~VALUE': string;
			SORT: number;
			code: number | null;
			TOTAL: number;
		};
	};
};

export type CustomFieldSettings = {
	is_required: object;
	is_deletable: boolean;
	is_visible: boolean;
	triggers: object | null;
	vat_rates: object;
	filter_type: null;
	tracking_callback: string;
	search_in: string;
	currency: string;
	chained_lists: string | null;
};

export type TaskTypes = {
	id: number;
	option: string;
	color: string;
	icon_id: number;
};

export type AMOCRMScheme = {
	managers: AmoConstant['managers'];
	groups: AmoConstant['groups'];
	account: AmoConstant['account'];
	task_types: AmoConstant['task_types'];
	user: AmoConstant['user'];
	constant: <U extends keyof AmoConstant>(arg: U) => AmoConstant[U];
	getWidgetsArea: () => string;
	widgets: WidgetsMetaInfo
};

export type WebHook = {
	id: number,
	destination: string,
	created_at: number,
	updated_at: number,
	account_id: number,
	created_by: number,
	sort: number,
	disabled: boolean,
	settings: string[]
}

export type WebHookDTO = {
	_total_items: number,
	_embedded: {
		webhooks: WebHook[]
	}
}

export type WidgetsMetaInfo = {
	list: {
		[ENV_INTEGRATION_NAME: string]: WidgetSettings
	}
}


