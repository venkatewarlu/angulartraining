import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  addProductsForm: FormGroup;
  submitted: Boolean = false;
  category: Array<string> = ["Samsung", "OnePlus", "Lenovo", "Redmi", "Apple"]
  subCategory = {
    Samsung: ["Galaxy M10"],
    OnePlus: ["OnePlus 6T"],
    Lenovo: ["K8 Note",],
    Redmi: ["Note5 Pro"],
    Apple: ["iPhone X", "iPhone6", "iPhone 6S", "iPhone7"]
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addProductsForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      price: ["", [Validators.required, Validators.min(500), Validators.max(10000)]],
      fileinput: ["", [Validators.required]],
      category: [
        //setting first option as default
        this.category[0],
        [Validators.required]
      ],
      subCategory: [
        this.subCategory.Samsung[0],
        [
          Validators.required
        ]
      ]
    });
  }

  getSelectedCategory() {
    switch (this.addProductsForm.controls['category'].value) {
      case 'Samsung': return 'Samsung'
      case 'OnePlus': return 'OnePlus'
      case 'Lenovo': return 'Lenovo'
      case 'Redmi': return 'Redmi'
      case 'Apple': return 'Apple'
    }

  }
  get f() {
    return this.addProductsForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    if (this.addProductsForm.invalid) {
      return;
    }
    console.log(this.addProductsForm.value);

  }

}
