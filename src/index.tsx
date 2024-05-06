import { WidgetSchema } from 'shared/types/Widget.types';
import './index.css';
import { getWidgetArea } from './shared/consts/AMO.consts';


const Widget: WidgetSchema = {
	async render(): Promise<boolean> {
		const area = AMOCRM.getWidgetsArea();

		console.log(area);

		if (!['stats',].includes(area)) {
			return true;
		}

		//добавление эллемента списка в aside
		const statsList = document.querySelector('.filter__list');
		const statsButton = document.createElement('li');

		statsList &&
			statsList.insertBefore(statsButton, statsList.firstChild);
		statsButton.classList.add(
			'aside__list-item',
			'js-filter-preset-link'
		);
		statsButton.style.height = `100%`;
		statsButton.style.flexDirection = 'column';
		statsButton.style.alignItems = 'flex-start';
		statsButton.style.padding = '0 0 0 30px';
		statsButton.setAttribute('id', 'button_root');
		statsButton.innerHTML = 'awsdawsdawsdawsdawsdawsd';

		//поиск work-area
		const pagePapa = document.getElementById('page_holder');
		const contentToHide : HTMLElement | null = pagePapa &&
			pagePapa.querySelector('.work-area');

		//нажатие на кнопку виджета
		statsButton.addEventListener('click', ()=>{
			if (contentToHide){
				contentToHide.style.display = 'none';
			}

			const mainContainer = document.createElement('div');
			mainContainer.style.background = 'black';
			mainContainer.style.height = '500px';
			mainContainer.style.width = '500px';

			pagePapa &&
				pagePapa.insertBefore(mainContainer, pagePapa.firstChild);
		})

		return true;
	},

	async init(): Promise<boolean> {
		return true;
	},

	settings(): boolean {
		return true;
	},

	async dpSettings(): Promise<boolean> {
		return true;
	},

	async onSave(self): Promise<boolean> {
		return true;
	},

	async initMenuPage(): Promise<boolean> {
		return true;
	},

	destroy(): void {
	},

};

export default Widget;
