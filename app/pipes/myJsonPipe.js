import {Injectable, Pipe} from 'angular2/core';

/*
  Generated class for the MyJsonPipe pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'myJsonPipe'
})
@Injectable()
export class MyJsonPipe {
  /*
    Takes a value and makes it lowercase.
   */
  transform(value, args) {
    return JSON.stringify(value);
  }
}
