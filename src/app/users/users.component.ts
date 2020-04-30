import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserModule} from '../../Model/UserModule';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: UserModule[];

  constructor(private activatedRoute: ActivatedRoute) {
    console.log(this.activatedRoute.snapshot.data);
    this.users = this.activatedRoute.snapshot.data as UserModule[];
    console.log(this.users);
  }

  ngOnInit(): void {
  }

}
