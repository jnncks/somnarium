import { Component, OnInit } from '@angular/core';
import {CircleComponent} from '../circle/circle.component';

@Component({
  selector: 'app-menucavas',
  templateUrl: './menucavas.component.html',
  styleUrls: ['./menucavas.component.scss'], 
  entryComponents: [CircleComponent],
})
export class MenucavasComponent implements OnInit {

  circles;

  constructor() {
    this.circles = [
    {x: 77, y: 176, radius: 15, id: 1},
    {x: 52, y: 35, radius: 15, id: 2},
    {x: 165, y: 146, radius: 15, id: 3},
    {x: 64, y: 171, radius: 15, id: 4},
    {x: 22, y: 120, radius: 15, id: 5}
  ];
   }

  ngOnInit() {
    let i = 0;
    for (let num of this.circles) {
      let  x = (50 - 35*Math.cos(-0.5 * Math.PI - 2*(1/this.circles.length)*i*Math.PI)).toFixed(4);
      let  y = (50 + 35*Math.sin(-0.5 * Math.PI - 2*(1/this.circles.length)*i*Math.PI)).toFixed(4);
      num.x = x;
      num.y = y;
      i++;
    }
  }

}
