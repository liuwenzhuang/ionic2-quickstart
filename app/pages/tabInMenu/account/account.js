import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the AccountPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/tabInMenu/account/account.html',
})
export class AccountPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }
}
