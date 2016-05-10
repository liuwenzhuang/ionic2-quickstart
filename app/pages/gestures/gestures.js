import {Page, NavController} from 'ionic-angular';

/*
 Generated class for the GesturesPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Page({
    templateUrl: 'build/pages/gestures/gestures.html',
})
export class GesturesPage {
    static get parameters() {
        return [[NavController]];
    }

    constructor(nav) {
        this.nav = nav;
        this.times = {
            tap: 0,
            press: 0,
            pan: 0,
            swipe: 0,
            rotate: 0,
            pinch: 0
        }
    }

    tapEvent($event) {
        console.log($event, $event.type);
        this.times[$event.type] ++;
    }

    pressEvent($event) {
        console.log($event, $event.type);
        this.times[$event.type] ++;
    }

    panEvent($event) {
        console.log($event, $event.type);
        this.times[$event.type] ++;
    }

    swipeEvent($event) {
        console.log($event, $event.type);
        this.times[$event.type] ++;
    }

    rotateEvent($event) {
        console.log($event, $event.type);
        this.times[$event.type] ++;
    }

    pinchEvent($event) {
        console.log($event, $event.type);
        this.times[$event.type] ++;
    }
}
