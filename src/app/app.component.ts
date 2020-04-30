import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    this.forma = new FormGroup({
        idUser: this.idUser,
      }
    );
    this.idUserInput = this.idUser.value;
  }
  // state = {
  //   login: '',
  //   pass: ''
  // };
  // saveInput(bodyInput) {
  //   this.state = bodyInput.value;
  // }
  // loginForm = {
  //   login: '',
  //   password: ''
  // };
  idUserInput: any[];
  forma: FormGroup;
  idUser: FormControl = new FormControl('', [Validators.required, Validators.pattern('[0-9]{0,}')]);

  sendForm(forma: FormGroup) {
    console.log(this.idUserInput);
  }
}
