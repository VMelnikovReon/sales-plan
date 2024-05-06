import { AMOCRMScheme, AmoManagers, YesOrNot, Manager } from '../types/AMO.types';
import { AmoCrmMock } from './AMOCRM.mock';
import { isAmo } from './consts';

const AMOCRMInstance: AMOCRMScheme = isAmo ? AMOCRM : AmoCrmMock;

export const getWidgetArea = (): string => AMOCRMInstance.getWidgetsArea();

export const account = {
	id: AMOCRMInstance.constant('account').id,
	subdomain: AMOCRMInstance.constant('account').subdomain,
	timezone: AMOCRMInstance.constant('account').timezone
};

export const user = {
	id: AMOCRMInstance.constant('user').id,
};
export const MANAGERS: AmoManagers = AMOCRMInstance.constant('managers');
export const MANAGERS_ARRAY: Manager[] = Object.keys(
	AMOCRMInstance.constant('managers'),
).map((managerKey) => ({
	id: managerKey,
	group: AMOCRMInstance.constant('managers')[managerKey].group,
	name: AMOCRMInstance.constant('managers')[managerKey].option,
	isAdmin: AMOCRMInstance.constant('managers')[managerKey].is_admin === YesOrNot.No,
}));

export const ACTIVE_MANAGERS = Object.values(MANAGERS).filter(({
		free_user,
		active
	}) => active && free_user === YesOrNot.No
);

export const GROUPS = AMOCRMInstance.constant('groups');

const widgetMetaData = AMOCRMInstance.widgets.list[ENV_INTEGRATION_NAME]
export const isWidgetActive = widgetMetaData && widgetMetaData?.params?.active === YesOrNot.Yes;
export const userId = AMOCRMInstance.constant('user').id;
export const isCurrentUserAdmin = MANAGERS[userId]?.is_admin === YesOrNot.Yes;


