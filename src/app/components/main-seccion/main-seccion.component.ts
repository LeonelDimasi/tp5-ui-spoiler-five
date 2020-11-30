import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swiper from 'swiper';
// import Swiper styles
//import 'swiper/swiper-bundle.css';
@Component({
  selector: 'app-main-seccion',
  templateUrl: './main-seccion.component.html',
  styleUrls: ['./main-seccion.component.scss']
})
export class MainSeccionComponent implements OnInit {

  playlists= [
    {
      id:1,
      nombre:"musica para codear",
      urlImg:"https://i1.wp.com/con2bemolesradio.com/wp-content/uploads/2017/11/ROCK.jpg?fit=350%2C401&ssl=1",
      creador:"juan perez",

    },
    {
      id:1,
      nombre:"musica para codear",
      urlImg:"https://i1.wp.com/con2bemolesradio.com/wp-content/uploads/2017/11/ROCK.jpg?fit=350%2C401&ssl=1",
      creador:"juan perez",

    },
    {
      id:1,
      nombre:"musica para codear",
      urlImg:"https://i1.wp.com/con2bemolesradio.com/wp-content/uploads/2017/11/ROCK.jpg?fit=350%2C401&ssl=1",
      creador:"juan perez",

    },
    {
      id:1,
      nombre:"musica para codear",
      urlImg:"https://i1.wp.com/con2bemolesradio.com/wp-content/uploads/2017/11/ROCK.jpg?fit=350%2C401&ssl=1",
      creador:"juan perez",

    },
    {
      id:1,
      nombre:"musica para codear",
      urlImg:"https://i1.wp.com/con2bemolesradio.com/wp-content/uploads/2017/11/ROCK.jpg?fit=350%2C401&ssl=1",
      creador:"juan perez",

    }
  ];

  constructor(private router:Router) { 
   
    
  }

  ngOnInit(): void {
   
   setTimeout(() => {
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
   }, 200);

    
  }


  irA(id:number){
    this.router.navigateByUrl('[playlist/'+id+']')
    //[routerLink]="['/playlist/'{{playlist.id}}]" 
  }
}
