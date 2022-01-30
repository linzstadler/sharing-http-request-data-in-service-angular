import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ServicesService } from 'src/services/services.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  data: Observable<any>;
  imageUrl = environment.imageUrl;
  constructor(private dataService: ServicesService) {
    this.data = this.dataService.data$;
  }

  ngOnInit(): void {
  }

}
