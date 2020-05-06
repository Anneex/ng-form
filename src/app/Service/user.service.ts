import {Injectable, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserModule} from '../../Model/UserModule';
import {AppComponent} from '../app.component';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private app: AppComponent) {
  }

  getUser(id): Observable<UserModule[]> {
    return this.http.get<UserModule[]>(`https://jsonplaceholder.typicode.com/users/${id}`);
}

}

