import { Component, OnInit } from '@angular/core';
import {OpenWeatherMapService} from '../services/open-weather-map.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   today: number = Date.now();

   weatherInfo = {
     temperature : '',
     humidity: '',
     location: '',
     icon: ''
   }

  constructor(private weatherService:OpenWeatherMapService) {

  }


  ngOnInit() {

    setInterval(() => {
          this.today = Date.now();
        }, 20000);

    this.weatherService.getWeather().subscribe(data => {
        this.weatherInfo = {
          temperature : data.main.temp,
          humidity: data.main.humidity,
          location: data.name,
          icon: data.weather[0].icon
      }

      console.log('prova: '+data.weather[0].icon);

    });

 }

 getWeatherIcon():string {

   return 'url(../assets/img/01d.png)';

 }



}
