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
      nombre:"Pachanga",
      urlImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw-oih-27LCt4C9jpZcTYSnB07NZgOZLxV5g&usqp=CAU",
      creador:"juan perez",

    },
    {
      id:1,
      nombre:"Rock Argentino",
      urlImg:"https://www.metro951.com/wp-content/uploads/2018/05/%C3%ACconos-del-Rock-Argentino.jpg",
      creador:"juan perez",

    },
    {
      id:1,
      nombre:"Lo mas nuevo",
      urlImg:"https://www.mundialdemusica.net/wp-content/uploads/2020/10/33F6B5B1-070D-49F2-A054-E95E824D251E.jpg",
      creador:"juan perez",

    },
    {
      id:1,
      nombre:"Fiesta Nacional",
      urlImg:"https://static.qobuz.com/images/covers/ua/je/ipaa6mhr5jeua_600.jpg",
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
    this.router.navigateByUrl('/playlist')
    //[routerLink]="['/playlist/'{{playlist.id}}]" 
  }

  

  redirectTo(){
   let uri="playlist";
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
    setTimeout(() => {
      location.reload();
    }, 1000);
    
 }

 
 
}
