import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
// import Swiper styles
//import 'swiper/swiper-bundle.css';
@Component({
  selector: 'app-main-seccion',
  templateUrl: './main-seccion.component.html',
  styleUrls: ['./main-seccion.component.scss']
})
export class MainSeccionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /*let swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });*/

    let swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      loop: true,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }

}
