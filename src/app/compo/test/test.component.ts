import {Component, OnInit} from '@angular/core';
import {DataService} from '../../data.service';
import {shareReplay} from 'rxjs/operators';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
    public name = null;

    constructor(private dataService: DataService) {
    }


    ngOnInit(): void {
        this.dataService.getData().subscribe(data => {
            console.log(data, 'asdAA');
            this.name = data;
        });

        // this.dataService.x.subscribe(data => {
        //     console.log(data, 'asdAA');
        //
        // });
    }

    reload() {
        this.dataService.reload();
    }
}
