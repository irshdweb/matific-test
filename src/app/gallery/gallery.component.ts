import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

import { ApiServiceService } from '../services/api-service.service'
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(private service : ApiServiceService ) { }

  slideData:any;

  config: SwiperOptions = {
    
    autoHeight: true,
    allowTouchMove: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: true
    },
    breakpoints: {
      1024: {
        slidesPerView: 4
      },
      500: {
        slidesPerView: 1
      },
      400: {
        slidesPerView: 1
      },
      300: {
        slidesPerView: 1
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    loop: false,
    pagination: { el: '.swiper-pagination', clickable: true }
  };

  ngOnInit(): void {
    this.getThumbs();
  }

  getThumbs(){
    this.service.getGallery().subscribe((data: any) => {
      this.slideData= data.thumbs
      console.log(this.slideData);

    },
    (err: HttpErrorResponse) => {
      console.log(err);
    })
  }

}
