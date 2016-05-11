import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {MenuController} from 'ionic-angular';

/*
  Generated class for the MenuService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MenuService {
  static get parameters(){
    return [[MenuController]]
  }  

  constructor(menu) {
    this.menus = menu.getMenus();
  }

  swipeEnable(shouldEnable) {
    for(const menu of this.menus) {
      menu.swipeEnable(!!shouldEnable);//!!将所有类型都转换为对于true或false的boolean值
    }
  }
}

