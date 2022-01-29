import { Component } from '@angular/core';
import {ServicesService} from "../services/services.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private dataService: ServicesService) {}


  ngOnInit(): void {


  }

  reload() {
    this.dataService.reload('asd');
  }
}
