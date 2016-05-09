import {Page, NavController, NavParams} from 'ionic-angular';
import {ListDetailsPage} from '../list-details/list-details';
/*
  Generated class for the CardPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/card/card.html',
})
export class CardPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }

  constructor(nav, params) {
    this.nav = nav;
    this.params = params;

    this.iconArray = ['alarm', 'alert', 'albums', 'american-football', 'analytics'];
    this.listItems = [];
    for(let i=1; i<11; i++) {
      this.listItems.push({
        title: 'Item #' + i,
        note: 'This is Item#' + i,
        icon: this.iconArray[Math.floor(Math.random() * this.iconArray.length)]
      })
    }
  }

  goSubPage(listItem) {
    this.nav.push(ListDetailsPage, {
      title: listItem.title
    });
  }
}
