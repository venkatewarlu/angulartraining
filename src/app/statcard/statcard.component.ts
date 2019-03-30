import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-statcard',
  templateUrl: './statcard.component.html',
  styleUrls: ['./statcard.component.css']
})
export class StatcardComponent implements OnInit {
  @Input() count: number = 0;
  @Input() title: string = "";
  @Input() iconClass = "";
  @Input() color = "black";


  constructor() { }

  ngOnInit() {
  }

  getStyle() {
    return {
      'font-size': '50px',
      'color': this.color
    }
  }



}
