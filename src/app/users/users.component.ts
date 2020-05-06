import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserModule} from '../../Model/UserModule';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: UserModule[];
   constructor(private activatedRoute: ActivatedRoute) {
   this.users = this.activatedRoute.snapshot.data as UserModule[];
   console.log(this.users);
   this.activatedRoute.queryParams.subscribe(value => console.log(value));
  }

  ngOnInit(): void {
  }

}
