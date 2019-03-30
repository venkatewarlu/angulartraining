import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = []
  tableHeaders = ["Sno", "Name", "Company", "Manufacturer", "Owner", "Price",]

  constructor(private router: Router, private productService: ProductServiceService) { }



  async ngOnInit() {
    const products = await this.productService.getProducts()
    console.log(products);
    this.products = products['products'];
  }

  navigateToAddProduct() {
    this.router.navigate([`products/addproduct`])
  }

}
