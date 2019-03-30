import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-headercomp',
  templateUrl: './headercomp.component.html',
  styleUrls: ['./headercomp.component.css']
})
export class HeadercompComponent implements OnInit {
  @Input() title: string = "";

  constructor() { }

  ngOnInit() {
  }

}
