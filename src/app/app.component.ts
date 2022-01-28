import { Component } from '@angular/core';
import {ServicesService} from "../services/services.service";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data: any;
  imageUrl = environment.imageUrl;
  constructor(private dataService: ServicesService) {}


  ngOnInit(): void {
    this.dataService.reload('asd');
    this.dataService.data$.subscribe(data => {
      console.log(data, 'asdAA');
      this.data = data;
    });

  }

  reload() {
    this.dataService.reload('asd');
  }
}
