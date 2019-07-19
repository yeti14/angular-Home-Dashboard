import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherMapService {

  apiUrl:string = 'http://api.openweathermap.org/data/2.5/weather?zip=08690,es&APPID=3a2b21cf1d05d0470ab2d09c0a66c058&units=metric'

  constructor(private httpClient: HttpClient) {


   }

   getWeather():Observable<any> {

     return this.httpClient.get(this.apiUrl);

   }
}
