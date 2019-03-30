import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-amazecard',
  templateUrl: './amazecard.component.html',
  styleUrls: ['./amazecard.component.css']
})
export class AmazecardComponent implements OnInit {
  @Input() srcUrl;
  @Input() price: number;
  @Input() model: string = "";

  constructor() { }

  ngOnInit() {
  }




  product = [
    {
      "image": "assets/mob1.jpg",
      "model": " Samsung Galaxy M10 (Charcoal Black, 3+32GB)",
      "price": " 24999"

    },
    {
      "image": "assets/mob2.jpg",
      "model": " OnePlus 6T (Mirror Black, 6GB RAM, 128GB Storage)",
      "price": " 25999"

    },

    {
      "image": "assets/mob3.jpg",
      "model": " Lenovo K8 Note (Venom Black, 4GB RAM, 64GB Storage)",
      "price": " 27999"

    },
    {
      "image": "assets/mob4.jpg",
      "model": " Redmi Note 5 Pro (Black, 6GB RAM, 64GB Storage)",
      "price": " 30999"

    },


    {
      "image": "assets/mob5.jpg",
      "model": " Apple iPhone X (64GB) - Space Grey",
      "price": " 74999"
    },
    {
      "image": "assets/mob6.jpg",
      "model": " Apple iPhone 6 (Gold, 1GB RAM, 32GB Storage)",
      "price": " 74999"
    },
    {
      "image": "assets/mob7.jpg",
      "model": " Apple iPhone 6s (32GB) - Space Gray",
      "price": " 74999"
    },
    {
      "image": "assets/mob8.jpg",
      "model": " Apple iPhone 7 (32GB) - Black",
      "price": " 74999"
    },
  ]

}
