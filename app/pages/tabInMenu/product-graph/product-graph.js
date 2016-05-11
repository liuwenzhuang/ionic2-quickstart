import {Page, NavController, NavParams, MenuController} from 'ionic-angular';
import {MenuService} from '../../../providers/menu-service/menu-service';

@Page ({
	templateUrl: 'build/pages/tabInMenu/product-graph/product-graph.html',
	providers: [MenuService]
})

export class ProductGraphPage {
	static get parameters() {
		return [[NavController], [NavParams], [MenuController], [MenuService]];
	}

	constructor(nav, params, menu, MenuService) {
		this.nav = nav;
		this.params = params;
		this.menus = menu.getMenus();//得到menu数组，Array<Menu>
		this.MenuService = MenuService;

		console.log(this.menus);

		this.name = this.params.get('name') || 'ProductGraph';
	}

	ngAfterViewInit() {
		/*for(let i=0; i<this.menus.length; i++) {//loop before es5
			this.menus[i].swipeEnable(false);//禁止滑动出现菜单
		}*/

		/*this.menus.forEach(function(menu) {//loop in es5
			menu.swipeEnable(false);
		});*/

		/*for(const menu of this.menus) {//loop in es6
			menu.swipeEnable(false);
		}*/

		this.MenuService.swipeEnable(false);
	}

	ngOnDestroy() {
		/*for(const menu of this.menus) {
			menu.swipeEnable(true);
		}*/

		this.MenuService.swipeEnable(true);
	}
}