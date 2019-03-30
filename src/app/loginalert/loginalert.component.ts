import { Component, OnInit, Input } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-loginalert',
  templateUrl: './loginalert.component.html',
  styleUrls: ['./loginalert.component.css']
})
export class LoginalertComponent implements OnInit {
  @Input() success;
  @Input() message;

  constructor() { }

  ngOnInit() {
    console.log("Initialize", this.success);
  }
  ngOnChanges(changes) {
    console.log(changes);
  }

  isDefined() {

    return this.success !== undefined;

  }
  isValid() {

    return this.success;

  }

}
