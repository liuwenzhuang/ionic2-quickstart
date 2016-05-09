import {Page, MenuController} from 'ionic-angular';
import {DemoFromSku} from '../../components/demo-from-sku/demo-from-sku';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
	static get parameters() {
		return [[MenuController]];
	}
  constructor(menu) {
  	this.menu = menu;
  }

  openMenu() {
  	this.menu.open();
  }
}
