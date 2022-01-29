import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import {usersRoutingModule} from "./users-routing.module";



@NgModule({
  declarations: [
    UsersComponent,
  ],
  imports: [
    CommonModule,
    usersRoutingModule
  ]
})
export class UsersModule { }
