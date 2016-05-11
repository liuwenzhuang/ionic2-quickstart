import {Page, Modal, MenuController, NavController, Config} from 'ionic-angular';
import {DemoFromSku} from '../../components/demo-from-sku/demo-from-sku';
import {ModalPage} from '../modal/modal';

@Page({
	templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
	static get parameters() {
		return [[MenuController], [NavController], [Config]];
	}
	constructor(menu, nav, config) {
		this.menu = menu;
		this.nav = nav;
		this.config = config;

		this.personList = [
			{
				name: 'Marty McFly',
				avatar: 'marty-avatar.png',
				hobbit: 'Basketball',
				address: 'East Road, Street 3, Apartment 4',
				birthday: 'Nov 5, 1995'
			}, {
				name: 'Gollum',
				avatar: 'avatar-gollum.jpg',
				hobbit: 'Baseball',
				address: 'West Road, Street 23, Apartment 14',
				birthday: 'Nov 25, 1895'
			}, {
				name: 'Frodo',
				avatar: 'avatar-frodo.jpg',
				hobbit: 'Swimming',
				address: 'South Road, Street 13, Apartment 24',
				birthday: 'Sep 15, 1994'
			}, 
		];
	}

	openMenu() {
		this.menu.open();
	}

	openModal(person) {
		console.log('open modal', person);
		let modal = Modal.create(ModalPage, person);
		this.nav.present(modal);
	}

	ngAfterViewInit() {
		//设置Modal动画
		this.config.set('modalEnter', 'modal-fade-in');
		this.config.set('modalLeave', 'modal-fade-out');
	}

	ngOnDestroy() {
		//恢复默认设置
		this.config.set('modalEnter', 'modal-slide-in');
		this.config.set('modalLeave', 'modal-slide-out');
	}
}
