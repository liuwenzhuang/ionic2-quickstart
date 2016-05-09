import {Page, NavController, JsonPipe, IonicApp} from 'ionic-angular';
import {ElementRef} from 'angular2/core';
import {MyJsonPipe} from '../../pipes/myJsonPipe';

/*
  Generated class for the CheckboxPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
    templateUrl: 'build/pages/checkbox/checkbox.html',
    pipes: [MyJsonPipe]
})
export class CheckboxPage {
    static get parameters() {
        return [[NavController], [ElementRef], [IonicApp]];
    }

    //execute 1st in lifecycle
    constructor(nav, element, app) {
        console.info('constructor time');
        this.nav = nav;
        this.element = element;
        this.app = app;

        this.items = [
            {
                title: 'Jon Snow',
                isChecked: true,
                isDisabled: false
            }, {
                title: 'Aray Stark',
                isChecked: false,
                isDisabled: true
            }, {
                title: 'Sansa Stark',
                isChecked: true,
                isDisabled: false,
            }, {
                title: 'Stannis Baratheon',
                isChecked: true,
                isDisabled: false
            }
        ];
    }

    /*//execute 2nd in lifecycle
    ngOnInit() {
        // Properties are resolved and things like
        // this.mapWindow and this.mapControls
        // had a chance to resolve from the
        // two child components <map-window> and <map-controls>
        console.info('ngOnInit time');
    }
    ngOnDestroy() {
        // Speak now or forever hold your peace
        console.log('ngOnDestroy time');
    }

    //execute 3th in lifecycle
    ngDoCheck() {
        // Custom change detection
        console.info('ngDoCheck time');
    }
    ngOnChanges(changes) {
        // Called right after our bindings have been checked but only
        // if one of our bindings has changed.
        //
        // changes is an object of the format:
        // {
        //   'prop': PropertyUpdate
        // }
        console.info('ngOnChanges time');
    }

    //execute 4th in lifecycle
    ngAfterContentInit() {
        // Component content has been initialized
        console.info('ngAfterContentInit time');
    }

    //execute 5th in lifecycle
    ngAfterContentChecked() {
        // Component content has been Checked
        console.info('ngAfterContentChecked time');
    }

    //execute 6th in lifecycle
    ngAfterViewInit() {
        console.info('ngAfterViewInit time');
        console.log(this.element.nativeElement.children[0]);

        console.log(document.getElementById('elastic-header'));
        console.log(this.scrollerHandle);
    }

    //execute 7th in lifecycle
    ngAfterViewChecked() {
        // Component views have been checked
        console.log('ngAfterViewChecked time');
    }*/
}
