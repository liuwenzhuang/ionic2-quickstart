import {App, Platform, IonicApp, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {ActionsheetPage} from './pages/actionsheet/actionsheet';
import {PopupPage} from './pages/popup/popup';
import {BdagePage} from './pages/bdage/bdage';
import {CardPage} from './pages/card/card';
import {CheckboxPage} from './pages/checkbox/checkbox';
import {FormsPage} from './pages/forms/forms';
import {GesturesPage} from './pages/gestures/gestures';
import {GridPage} from './pages/grid/grid';
import {TabsPage} from './pages/tabInMenu/tabs/tabs';


@App({
    //template: '<ion-nav [root]="rootPage"></ion-nav>',
    templateUrl: 'build/app.html',
    config: {
        mode: 'ios'
        //tabbarPlacement: 'bottom'
    } // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
    static get parameters() {
        return [[Platform], [IonicApp], [MenuController]];
    }

    constructor(platform, app, menu, nav) {
        this.app = app;
        this.menu = menu;

        this.menuItems = [
            {
                title: 'Home',
                component: HomePage
            }, {
                title: 'ActionSheet',
                component: ActionsheetPage
            }, {
                title: 'Popup',
                component: PopupPage
            }, {
                title: 'Bdage',
                component: BdagePage
            }, {
                title: 'Card',
                component: CardPage
            }, {
                title: 'Checkbox',
                component: CheckboxPage
            }, {
                title: 'Forms',
                component: FormsPage
            }, {
                title: 'GesturesPage',
                component: GesturesPage
            }, {
                title: 'GridPage',
                component: GridPage
            }, {
                title: 'TabsPage',
                component: TabsPage
            }
        ];

        this.rightMenuItems = [
            {
                title: 'Home',
                component: HomePage
            }, {
                title: 'ActionSheet',
                component: ActionsheetPage
            }, {
                title: 'Popup',
                component: PopupPage
            }
        ];

        this.rootPage = HomePage;

        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
        });

        this.nav = nav;
    }

    openPage(page) {
        this.menu.close();
        let nav = this.app.getComponent('nav');
        nav.setRoot(page.component);
    }
}
