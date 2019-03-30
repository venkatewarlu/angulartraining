import { Component, OnInit, Input } from '@angular/core';
// var formatNumber = require('simple-format-number');
import * as formatNumber from 'simple-format-number';
@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  @Input() amount: number;
  @Input() stock: string = "";

  getAmt() {
    return formatNumber(this.amount);
  }

  constructor() { }



  ngOnInit() {
  }

}
