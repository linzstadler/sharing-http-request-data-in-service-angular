import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { UserListComponent } from './components/user-list/user-list.component';
@NgModule({
    declarations: [
        HomeComponent,
        UserListComponent
        
    ],
    imports: [
        CommonModule,
        HomeRoutingModule
    ]
})
export class HomeModule {
}
