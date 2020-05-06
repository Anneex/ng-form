import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DataService} from './Service/data.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private dataService: DataService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.forma = new FormGroup({
        idUser: this.idUser,
      }
    );
  }
  forma: FormGroup;
  idUser: FormControl = new FormControl('', [Validators.required, Validators.pattern('[0-9]{0,}')]);

  newIdUser(value: number) {
    this.dataService.setState(value);
    this.router.navigate([value, 'details'], {state: {value}, queryParams: {idOfUser: value}, relativeTo: this.activatedRoute});
  }
}
  // saveInput(bodyInput) {
  //   this.state = bodyInput.value;
  // }
  // loginForm = {
  //   login: '',
  //   password: ''
  // };
