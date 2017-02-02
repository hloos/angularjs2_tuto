import { Component } from '@angular/core';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// @Injectable()
export class AppComponent {
  title = 'app works !';

  closeApplication() {
    console.log("Close meeeeee")
  }
  // champion = 'You';

  // constructor(private orderDetail: string) {
  // }

  // constructor() {
  // }

  // setChampion(){
  //   this.champion = 'Me'
  // }
}
