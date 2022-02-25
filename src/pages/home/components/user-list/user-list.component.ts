import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ServicesService } from 'src/services/services.service';
import {DataModel} from "../../../../shared/models/data.model";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  data: Observable<DataModel>;
  imageUrl = environment.imageUrl;
  public page = 1;
  public size = 10;
  constructor(private dataService: ServicesService) {
    this.data = this.dataService.data$;
  }

  ngOnInit(): void {
  }

  public next() {
    this.page += 1;
    this.dataService.reload({
      page: this.page,
      size: this.size
    });
  }
}
