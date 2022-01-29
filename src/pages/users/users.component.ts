import { Component, OnInit } from '@angular/core';
import {ServicesService} from "../../services/services.service";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  data: Observable<any>;
  imageUrl = environment.imageUrl;
  constructor(private dataService: ServicesService) {
    this.data = this.dataService.data$;
  }

  ngOnInit(): void {
  }

}
