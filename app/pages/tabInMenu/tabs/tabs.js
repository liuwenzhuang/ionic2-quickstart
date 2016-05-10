import {NavController, Page, IonicApp} from 'ionic-angular';
import {ElementRef} from 'angular2/core';
import {ProductsPage} from '../products/products';
import {RecordsPage} from '../records/records';
import {AccountPage} from '../account/account';
import {MorePage} from '../more/more';


@Page({
  templateUrl: 'build/pages/tabInMenu/tabs/tabs.html'
})
export class TabsPage {
  static get parameters() {
    return [[NavController], [IonicApp], [ElementRef]];
  }

  constructor(nav, app, element) {
    this.nav = nav;
    this.app = app;
    this.element = element;
    // set the root pages for each tab
    this.tab1Root = ProductsPage;
    this.tab2Root = RecordsPage;
    this.tab3Root = AccountPage;
    this.tab4Root = MorePage;
    
  }

  ngAfterViewInit() {
    console.info(this.element.nativeElement.children[0]);
    //this.element.nativeElement.children[0].childNodes[0].setHidden(true);
  }
}
