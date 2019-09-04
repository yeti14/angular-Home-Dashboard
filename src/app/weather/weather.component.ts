import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  title = '';
  type = 'LineChart';
  data = [
   ["17:10",  7.0, -0.2],
   ["17:15",  6.9, 0.8],
   ["17:20",  9.5,  5.7],
   ["17:25",  14.5, 11.3],
   ["17:30",  18.2, 17.0],
   ["17:35",  21.5, 22.0],
   ["17:40",  25.2, 24.8],
   ["17:45",  26.5, 24.1]
];
columnNames = ["Month", "Bedroom","Dinning room"];
options = {
   vAxis: {
    title: 'Temperature'
  },
   hAxis: {
      title: 'Hour'
   }
};
width = 700;
height = 300;

  constructor() { }

  ngOnInit() {
  }

}
