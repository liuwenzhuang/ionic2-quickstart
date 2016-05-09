import {Page, NavController, ActionSheet, MenuController} from 'ionic-angular';

/*
  Generated class for the ActionsheetPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/actionsheet/actionsheet.html',
})
export class ActionsheetPage {
  static get parameters() {
    return [[NavController], [MenuController]];
  }
  constructor(nav, menu) {
    this.nav = nav;
    this.menu = menu;
    this.isHide = true;
  }

  openActionSheet() {
    let actionSheet = ActionSheet.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('destructive clicked');
          }
        }, {
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }, {
          text: 'Toggle Menu',
          handler: () => {
            this.menu.open();
          }
        }, {
          text: 'Hide Second Button',
          handler: () => {
            this.isHide = false;
          }
        }
      ]
    });
    this.nav.present(actionSheet);
  }
}
