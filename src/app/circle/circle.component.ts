import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  //to make inner components of SVG you must use an [attribute] selector: 
  selector: '[app-circle]',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss']
})
export class CircleComponent implements OnInit {
  @Input('circle') circle: any
  @Output() newLevel = new EventEmitter()
  clicked(event) {
   this.newLevel.emit("newLevel")
  }

  constructor() { 
    //console.log(this.circle)
  }

  ngOnInit() {
  }

}