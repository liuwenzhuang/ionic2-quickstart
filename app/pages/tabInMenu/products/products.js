import {Page, NavController, IonicApp} from 'ionic-angular';
import {ProductGraphPage} from '../product-graph/product-graph';

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

    this.pushPage = ProductGraphPage;
    this.params = {
      name: 'K Graph'
    };
  }

  goOtherPage() {
    this.nav.push(this.pushPage, this.params);
  }

  ngAfterViewInit() {
    console.log(this.app.getComponent('product_bar'));
  }
}
