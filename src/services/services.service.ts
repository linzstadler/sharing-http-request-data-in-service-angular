import { Injectable } from '@angular/core';
import {distinctUntilChanged, ReplaySubject, shareReplay, startWith, switchMap} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private endpoint = 'http://nex.enenom.com/users';
  private readonly trigger$ = new ReplaySubject<string>(1);
  private headers = new HttpHeaders();


  constructor(private http: HttpClient) {
    this.headers = this.headers.append('token', '02fd7e8b6a6b4c1ca4b603180160cf17');
  }

  readonly data$ = this.trigger$.pipe(
      distinctUntilChanged(),
      switchMap((code) => this.http.get<any>(`${this.endpoint}`, {'headers': this.headers}).pipe(
          startWith(null)
      )),
      shareReplay()
  );


  // reload() {
  //     this.trigger$.next();
  // }
  public reload(code: string): void {
    this.trigger$.next(code);
  }
}
