import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the FormsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
    templateUrl: 'build/pages/forms/forms.html',
})
export class FormsPage {
    static get parameters() {
        return [[NavController]];
    }

    constructor(nav) {
        this.nav = nav;

        this.formParams = {
          username: '',
          password: ''
        };
    }

    ngAfterViewInit() {
        
    }
}
