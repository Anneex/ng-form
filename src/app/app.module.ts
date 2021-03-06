import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { FirstComponent } from './first/first.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {UserResolverService} from './Service/user-resolver.service';
import {UserService} from './Service/user.service';

const router: Routes = [
  {path: '', component: FirstComponent},
  {path: ':id/details', component: UsersComponent, resolve: {xxx: UserResolverService}}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    FirstComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(router)
  ],
  providers: [UserService, AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
