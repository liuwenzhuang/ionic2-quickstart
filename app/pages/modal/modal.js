import {Page, NavController, Modal, ViewController, NavParams} from 'ionic-angular';

@Page({
	templateUrl: 'build/pages/modal/modal.html'
})

export class ModalPage {
	static get parameters() {
		return [[NavController], [ViewController], [NavParams]];
	}

	constructor(nav, viewCtrl, params) {
		this.nav = nav;
		this.viewCtrl = viewCtrl;
		this.params = params;

		this.des = this.params.data;
	}

	close() {
		this.viewCtrl.dismiss();//close modal
		//this.nav.pop();
	}
}