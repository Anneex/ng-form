import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  state = new BehaviorSubject(1);

  constructor() { }

  getState() {
  return this.state;
}
setState(state){
    this.state.next(state);
}
}
