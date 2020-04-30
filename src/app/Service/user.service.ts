import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserModule} from '../../Model/UserModule';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }
  getUser(): Observable<UserModule[]> {
    return this.http.get<UserModule[]>('https://jsonplaceholder.typicode.com/users');
}

}
