import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherMapService {

  apiUrl:string = 'http://api.openweathermap.org/data/2.5/weather?zip=08690,es&APPID=<!--YOUR APPID HERE-->&units=metric'

  constructor(private httpClient: HttpClient) {


   }

   getWeather():Observable<any> {

     return this.httpClient.get(this.apiUrl);

   }
}
