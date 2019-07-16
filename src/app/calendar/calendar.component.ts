import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import {CalendarEventsService} from '../services/calendar-events.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

   private eventsResult = [];

  constructor(private calendarEventsService:CalendarEventsService) { }

  ngOnInit() {
    this.getEvents();
  }

  calendarPlugins=[dayGridPlugin];

  getEvents() {

    this.calendarEventsService.getEvents().subscribe((res : any[])=>{
         this.eventsResult = res;

    });

    return this.eventsResult;
  }

}
