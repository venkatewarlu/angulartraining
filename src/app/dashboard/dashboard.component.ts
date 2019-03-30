import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // users = [{
  //   firstName: 'Venkat',
  //   lastName: 'Puttamsetti',
  //   email: 'venkat.p@gmail.com',
  //   phone: '9704399315',
  //   designation: 'Trainee'
  // },

  // {
  //   firstName: 'Sukumar',
  //   lastName: 'kuchana',
  //   email: 'sukumar@gmail.com',
  //   phone: '9704399315',
  //   designation: 'Trainee'
  // },
  // {
  //   firstName: 'Jyothi',
  //   lastName: 'Saikam',
  //   email: 'jyothi@gmail.com',
  //   phone: '9704399315',
  //   designation: 'Trainee'
  // },
  // {
  //   firstName: 'Cinni',
  //   lastName: 'Thomas',
  //   email: 'cinni@gmail.com',
  //   phone: '9704399315',
  //   designation: 'Trainee'
  // },
  // {
  //   firstName: 'Pradeep',
  //   lastName: 'Kumar',
  //   email: 'Pradeep@gmail.com',
  //   phone: '9704399315',
  //   designation: 'Trainee'
  // },
  // {
  //   firstName: 'Subha',
  //   lastName: 'Vellapandi',
  //   email: 'subha@gmail.com',
  //   phone: '9704399315',
  //   designation: 'Trainee'
  // },
  // {
  //   firstName: 'Shruthi',
  //   lastName: 'Muthu',
  //   email: 'Shruthi@gmail.com',
  //   phone: '9704399315',
  //   designation: 'Trainee'
  // },
  // {
  //   firstName: 'Manisha',
  //   lastName: 'Akula',
  //   email: 'Manisha@gmail.com',
  //   phone: '9704399315',
  //   designation: 'Trainee'
  // },
  // {
  //   firstName: 'Priyanka',
  //   lastName: 'Chittibabu',
  //   email: 'priyanka@gmail.com',
  //   phone: '9704399315',
  //   designation: 'Trainee'
  // },
  // {
  //   firstName: 'Mohana',
  //   lastName: 'Manohar',
  //   email: 'mohana@gmail.com',
  //   phone: '9704399315',
  //   designation: 'Trainee'
  // }]

  products = [{
    name: 'One Plus 5',
    company: 'China',
    manufacturer: 'One Plus',
    owner: 'kyangyong',
    price: '35000'
  },
  {
    name: 'One Plus 5',
    company: 'China',
    manufacturer: 'One Plus',
    owner: 'kyangyong',
    price: '35000'
  },
  {
    name: 'One Plus 5',
    company: 'China',
    manufacturer: 'One Plus',
    owner: 'kyangyong',
    price: '35000'
  },
  {
    name: 'One Plus 5',
    company: 'China',
    manufacturer: 'One Plus',
    owner: 'kyangyong',
    price: '35000'
  },
  {
    name: 'One Plus 5',
    company: 'China',
    manufacturer: 'One Plus',
    owner: 'kyangyong',
    price: '35000'
  },

  {
    name: 'One Plus 5',
    company: 'China',
    manufacturer: 'One Plus',
    owner: 'kyangyong',
    price: '35000'
  },

  {
    name: 'One Plus 5',
    company: 'China',
    manufacturer: 'One Plus',
    owner: 'kyangyong',
    price: '35000'
  },
  ]

  // tableHeaders = ["Sno", "First", "Last", "Email", "Phone", "Designation"]
  tableHeaders = ["Sno", "Name", "Company", "Manufacturer", "Owner", "Price",]
  constructor() { }

  ngOnInit() {
  }

}
