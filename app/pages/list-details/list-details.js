import {Page, NavController, NavParams} from 'ionic-angular';

/*
  Generated class for the ListDetailsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/list-details/list-details.html',
})
export class ListDetailsPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }

  constructor(nav, params) {
    this.nav = nav;
    this.params = params;

    this.des = "This is " + this.params.get('title');
  }
}
