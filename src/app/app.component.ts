import { Component } from '@angular/core';
import {ServicesService} from "../services/services.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sharing-http-request-data-in-service-angular';

  constructor(private dataService: ServicesService) {
  }


  ngOnInit(): void {
    this.dataService.reload('asd');
    this.dataService.data$.subscribe(data => {
      console.log(data, 'asdAA');
      // this.name = data;
    });

  }

  reload() {
    this.dataService.reload('asd');
  }
}
