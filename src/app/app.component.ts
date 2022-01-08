import {Component, OnInit} from '@angular/core';
import {DataService} from './data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public name = null;

    constructor(private dataService: DataService) {
    }

    title = 'storing-data-in-service';

    ngOnInit(): void {


    }


}
