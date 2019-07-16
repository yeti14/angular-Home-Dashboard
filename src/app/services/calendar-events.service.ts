import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarEventsService {

  apiUrl:string = 'http://localhost:8080/calendarEvents';

  constructor(private httpClient: HttpClient) { }

  getEvents():Observable<any> {

    return this.httpClient.get(this.apiUrl);

  }

}
