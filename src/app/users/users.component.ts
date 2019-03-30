import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRouteSnapshot, ActivationStart } from '@angular/router';
import { getCanActivateChild } from '@angular/router/src/utils/preactivation';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = []
  tableHeaders = ["Sno", "First", "Last", "Email", "Phone", "Designation", "Status"]

  // users = [{
  //   firstName: 'Venkat',
  //   lastName: 'Puttamsetti',
  //   email: 'venkat.p@gmail.com',
  //   phone: '9704399315',
  //   designation: 'Trainee',
  //   status: 'Inactive'
  // },

  // {
  //   firstName: 'Sukumar',
  //   lastName: 'kuchana',
  //   email: 'sukumar@gmail.com',
  //   phone: '9704399315',
  //   designation: 'Trainee',
  //   status: 'active'
  // },
  // {
  //   firstName: 'Jyothi',
  //   lastName: 'Saikam',
  //   email: 'jyothi@gmail.com',
  //   phone: '9704399315',
  //   designation: 'Trainee',
  //   status: 'Inactive'
  // },
  // {
  //   firstName: 'Cinni',
  //   lastName: 'Thomas',
  //   email: 'cinni@gmail.com',
  //   phone: '9704399315',
  //   designation: 'Trainee',
  //   status: 'Inactive'
  // },
  // {
  //   firstName: 'Pradeep',
  //   lastName: 'Kumar',
  //   email: 'Pradeep@gmail.com',
  //   phone: '9704399315',
  //   designation: 'Trainee',
  //   status: 'active'

  // },
  // {
  //   firstName: 'Subha',
  //   lastName: 'Vellapandi',
  //   email: 'subha@gmail.com',
  //   phone: '9704399315',
  //   designation: 'Trainee',
  //   status: 'active'
  // },
  // {
  //   firstName: 'Shruthi',
  //   lastName: 'Muthu',
  //   email: 'Shruthi@gmail.com',
  //   phone: '9704399315',
  //   designation: 'Trainee',
  //   status: 'Inactive'
  // },
  // {
  //   firstName: 'Manisha',
  //   lastName: 'Akula',
  //   email: 'Manisha@gmail.com',
  //   phone: '9704399315',
  //   designation: 'Trainee',
  //   status: 'Inactive'
  // },
  // {
  //   firstName: 'Priyanka',
  //   lastName: 'Chittibabu',
  //   email: 'priyanka@gmail.com',
  //   phone: '9704399315',
  //   designation: 'Trainee',
  //   status: 'Inactive'
  // },
  // {
  //   firstName: 'Mohana',
  //   lastName: 'Manohar',
  //   email: 'mohana@gmail.com',
  //   phone: '9704399315',
  //   designation: 'Trainee',
  //   status: 'active'
  // },
  // {
  //   firstName: 'Rama',
  //   lastName: 'Pandya',
  //   email: 'Rama@gmail.com',
  //   phone: '9704399315',
  //   designation: 'Trainee',
  //   status: 'Inactive'
  // },
  // {
  //   firstName: 'Raja',
  //   lastName: 'Krishna',
  //   email: 'raja@gmail.com',
  //   phone: '9704399315',
  //   designation: 'Trainee',
  //   status: 'active'
  // }]

  len: number = this.users.length;

  getAct() {
    let acount: number = 0;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].status === "active") {
        acount++;

        console.log("venkat");
      }
    }
    return acount;
  }

  getInAct() {
    let icount: number = 0;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].status === "Inactive") {
        icount++;
      }
    }
    return icount;
  }


  constructor(private router: Router, private userService: UsersService) { }



  async ngOnInit() {
    const users = await this.userService.getUsers()
    console.log(users);
    this.users = users['users']
  }

  navigateToUser(id) {
    console.log(id);
    this.router.navigate([`users/${id}`])

  }



}
