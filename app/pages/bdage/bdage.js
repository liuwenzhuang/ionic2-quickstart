import {Page, NavController, NavParams} from 'ionic-angular';

/*
  Generated class for the BdagePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/bdage/bdage.html',
})
export class BdagePage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }

  constructor(nav, params) {
    this.nav = nav;
    this.params = params;

    this.iconArray = ['american-football', 'basketball', 'baseball', 'egg', 'logo-facebook', 'logo-chrome'];
    this.listItems = [];
    for(let i=1; i<7; i++) {
      let iconIndex = Math.floor(Math.random()*this.iconArray.length);
      console.log(this.iconArray[iconIndex]);
      this.listItems.push({
        title: 'Item#' + i,
        note: 'This is item#' + i,
        icon: this.iconArray[iconIndex],
        bdage: i
      });
    }
  }

  openItem($event, listItem) {
    listItem.bdage ++;
  }
}
