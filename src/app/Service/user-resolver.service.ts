import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {UserModule} from '../../Model/UserModule';
import {UserService} from './user.service';
import {Observable} from 'rxjs';
import {AppComponent} from '../app.component';
import {DataService} from './data.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<UserModule[]>{
 id = 1;
  constructor(private userService: UserService, private dataService: DataService) {
    dataService.getState().subscribe(value => this.id = value);

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserModule[]> | Promise<UserModule[]> | UserModule[] {
    return this.userService.getUser(this.id);
  }
}
