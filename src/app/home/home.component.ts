import { Component, OnInit } from '@angular/core';
import {OpenWeatherMapService} from '../services/open-weather-map.service';
import {CalendarEventsService} from '../services/calendar-events.service';
import timeGridPlugin from '@fullcalendar/timegrid';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   calendarPlugins=[timeGridPlugin];
   today: number = Date.now();

   weatherInfo = {
     temperature : '',
     humidity: '',
     location: '',
     icon: ''
   }

   private eventsResult = [];

  constructor(private weatherService:OpenWeatherMapService, private calendarEventsService:CalendarEventsService) {

  }

  getWeatherInfo() {

      this.weatherService.getWeather().subscribe(data => {
          this.weatherInfo = {
            temperature : data.main.temp,
            humidity: data.main.humidity,
            location: data.name,
            icon: data.weather[0].icon
        }
      });

      console.log('call getWeatherInfo()');

  }


  ngOnInit() {

    setInterval(() => {
          this.today = Date.now();
        }, 20000);

    this.getWeatherInfo();
    setInterval(() => {
         this.getWeatherInfo();
    }, 60000);

    this.getEvents();

 }



 getWeatherIcon():string {

   return 'url(../assets/img/01d.png)';

 }

 getEvents() {

   this.calendarEventsService.getEvents().subscribe((res : any[])=>{
        console.log(res);
        this.eventsResult = res;

   });

   return this.eventsResult;
 }



}
