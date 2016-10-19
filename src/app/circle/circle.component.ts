import { Component, OnInit, Input } from '@angular/core';

@Component({
  //to make inner components of SVG you must use an [attribute] selector: 
  selector: '[app-circle]',
 // inputs: ['circle'],
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss']
})
export class CircleComponent implements OnInit {
  @Input('circle') circle: any
  clicked(event) {
   //console.log("clicked " + this.circle.id)
  }

  constructor() { 
    //console.log(this.circle)
  }

  ngOnInit() {
  }

}