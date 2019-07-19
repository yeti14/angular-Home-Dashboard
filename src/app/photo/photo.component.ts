import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() { }

  ngOnInit() {

    this.galleryOptions = [
            {
                width: '100%',
                height: '100%',
                imageAnimation: NgxGalleryAnimation.Fade,
                imageAutoPlay: true,
                thumbnails: false,
                imageAutoPlayInterval : 5000,
                preview: false
            }

        ];

        this.galleryImages = [
            {
                small: 'assets/img/background1.jpg',
                medium: 'assets/img/background1.jpg',
                big: 'assets/img/background1.jpg'
            },
            {
                small: 'assets/img/background2.jpg',
                medium: 'assets/img/background2.jpg',
                big: 'assets/img/background2.jpg'
            },
            {
                small: 'assets/img/background3.jpg',
                medium: 'assets/img/background3.jpg',
                big: 'assets/img/background3.jpg'
            }
        ];
  }

  goHome() {
    console.log("GO HOME");
  }

}
