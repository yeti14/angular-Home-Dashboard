import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {WeatherComponent} from './weather/weather.component';
import {CalendarComponent} from './calendar/calendar.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'weather',
    component: WeatherComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  { path: '',
   redirectTo: '/home',
   pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
