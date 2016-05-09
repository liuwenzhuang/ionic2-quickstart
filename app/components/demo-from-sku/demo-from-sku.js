import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';

/*
  Generated class for the DemoFromSku component.

  See https://angular.io/docs/ts/latest/api/core/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'demo-from-sku',
  templateUrl: 'build/components/demo-from-sku/demo-from-sku.html',
  directives: [FORM_DIRECTIVES]
})
export class DemoFromSku {
  constructor() {
    this.text = 'Hello World';
  }

  onSubmit(form) {
  	console.log('you submitted value:', from);
  }
}
