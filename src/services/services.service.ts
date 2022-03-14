import {Injectable} from '@angular/core';
import {distinctUntilChanged, ReplaySubject, shareReplay, startWith, switchMap} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../environments/environment";
import {DataModel} from "../shared/models/data.model";
interface pagination {
    page: number;
    size: number;
}
@Injectable({
    providedIn: 'root'
})

export class ServicesService {
    private readonly endpoint = `${environment.baseUrl}/users`;
    private readonly trigger$ = new ReplaySubject<pagination>();
    private readonly headers = new HttpHeaders();
    constructor(private http: HttpClient) {
        this.headers = this.headers.append('token', '88387d932e65463186c567487250053d');
    }

    readonly data$ = this.trigger$.pipe(
        startWith({page: 1, size: 10}),
        switchMap((data: pagination) => this.http.get<DataModel>(`${this.endpoint}?page=${data.page}&size=${data.size}`, {'headers': this.headers})),
        shareReplay()
    );

    public reload(data: pagination): void {

        this.trigger$.next(data);
    }
}
