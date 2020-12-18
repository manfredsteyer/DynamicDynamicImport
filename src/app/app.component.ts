import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Hello World!';

  constructor() {
    let fileName = './test';
    import(fileName).then(m => console.debug('sum', m.fn(1,2)));
  }
}
