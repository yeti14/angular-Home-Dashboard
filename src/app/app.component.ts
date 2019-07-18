import { Component,  OnInit } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'HomeDashboard';

  isPhotoFrame:Boolean = false;

  constructor(private router:Router) {
  }

  ngOnInit() {

    this.router.events.subscribe(
      (event: any) => {
          if (event instanceof NavigationEnd ) {

              if (this.router.url == '/photo') {
                this.isPhotoFrame = true;
              } else {
                this.isPhotoFrame = false;
              }
              console.log(this.router.url);
              console.log(this.isPhotoFrame);

         }
       }
     );

  }
}
