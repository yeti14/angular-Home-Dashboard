import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import {GalleryService} from '../services/gallery.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private galleryService:GalleryService) { }

  ngOnInit() {

    this.galleryOptions = [
            {
                width: '100%',
                height: '100%',
                imageAnimation: NgxGalleryAnimation.Fade,
                imageAutoPlay: true,
                thumbnails: false,
                imageAutoPlayInterval : 20000,
                preview: false
            }

        ];

        this.galleryService.getImages().subscribe((res : any[])=>{
             this.galleryImages = res;

        });

  }

}
