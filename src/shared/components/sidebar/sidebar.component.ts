import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";
import {ServicesService} from "../../../services/services.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  data: Observable<any>;
  imageUrl = environment.imageUrl;
  constructor(private dataService: ServicesService) {
    this.data = this.dataService.data$;
  }

  ngOnInit(): void {
    this.dataService.reload('asd');

  }


}
