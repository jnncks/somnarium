import { Component, OnInit} from '@angular/core';
import {CircleComponent} from '../circle/circle.component';

@Component({
  selector: 'app-menucavas',
  templateUrl: './menucavas.component.html',
  styleUrls: ['./menucavas.component.scss'], 
  entryComponents: [CircleComponent],
})
export class MenucavasComponent implements OnInit {

  circles;
  level1; 
  level2;

  constructor() {
    this.circles = []
    this.level1 = [
    {x: 77, y: 176, radius: 15, id: 1},
    {x: 52, y: 35, radius: 15, id: 2},
    {x: 165, y: 146, radius: 15, id: 3},
    {x: 64, y: 171, radius: 15, id: 4},
    {x: 22, y: 120, radius: 15, id: 5}
  ];

  this.level2 = [];
   }

  ngOnInit() {
    this.calculateCircles(1, this.level1);
  }

  calculateCircles(level, circles){
    let i = 0;
    for (let num of circles) {
      //Mittelpunkt - Radius * COS(Bogenmaß rausrechnen - Rotationswinkel))
      let  x = (100 - (level * 35) * Math.cos(-0.5 * Math.PI - 2 * (1 / circles.length) * i * Math.PI)).toFixed(4);
      let  y = (100 + (level * 35) * Math.sin(-0.5 * Math.PI - 2 * (1 / circles.length) * i * Math.PI)).toFixed(4);
      num.x = x;
      num.y = y;
      this.circles.push(num)
      i++;
    }
    
  }
  newLevel(level){
    //handle event
    console.log("Received Event")
    this.level2.push({x: 0, y: 0, radius: 15, id: 6});
    this.level2.push({x: 0, y: 0, radius: 15, id: 7});
    this.level2.push({x: 0, y: 0, radius: 15, id: 8});
    this.level2.push({x: 0, y: 0, radius: 15, id: 9});
    this.level2.push({x: 0, y: 0, radius: 15, id: 10});
    this.calculateCircles(2, this.level2);
  }

}
