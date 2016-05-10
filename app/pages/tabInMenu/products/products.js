import {Page, NavController, IonicApp} from 'ionic-angular';
import {CheckboxPage} from '../../checkbox/checkbox';

/*
  Generated class for the ProductsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/tabInMenu/products/products.html',
})
export class ProductsPage {
  static get parameters() {
    return [[NavController], [IonicApp]];
  }

  constructor(nav, app) {
    this.nav = nav;
    this.app = app;
  }

  goOtherPage() {
    this.nav.push(CheckboxPage);
  }

  ngAfterViewInit() {
    console.log(this.app.getComponent('product_bar'));
  }
}
