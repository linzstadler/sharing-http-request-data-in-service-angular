import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of, ReplaySubject, Subject, Subscriber} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {distinctUntilChanged, map, shareReplay, startWith, switchMap, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class DataService {

    private endpoint = 'http://nex.enenom.com/users';
    private readonly trigger$ = new ReplaySubject<string>(1);
    private headers = new HttpHeaders();


    constructor(private http: HttpClient) {
        this.headers = this.headers.append('token', '02fd7e8b6a6b4c1ca4b603180160cf17');
    }

    readonly data$ = this.trigger$.pipe(
        // startWith(void 0),
        distinctUntilChanged(),
        switchMap((code) => this.http.get<any>(`${this.endpoint}`, {'headers': this.headers}).pipe(
            startWith(null)
        )),
        shareReplay()
    );


    // reload() {
    //     this.trigger$.next();
    // }
    public reload(code): void {
        this.trigger$.next(code);
    }
}





// private readonly trigger$ = new ReplaySubject<string>(1);
// public clientCode = null;
//
// constructor(private _clientService: ClientService) {
// }
//
// readonly getMembers$ = this.trigger$.pipe(
//     distinctUntilChanged(),
//     switchMap((clientCode) => this._clientService.getClientMembers(clientCode).pipe(
//         startWith(null)
//     )),
//     shareReplay()
// );
//
// public reloadData(code: string): void {
//     this.trigger$.next(code);
// }
