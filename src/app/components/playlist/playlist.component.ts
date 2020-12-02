import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QuestionComponent } from '../popups/question/question.component';
import { QualificationPlaylistComponent } from '../popups/qualification-playlist/qualification-playlist.component';
import { QualificationComponent } from '../popups/qualification/qualification.component';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  temas=[
    {
      titulo:"El Final Es En Donde Parti",
      artista:"La Renga",
      album:"Despedazado Por Mil Partes",
      promedio:3.5,
      duracion:"3:30",
    },
    {
      titulo:"El Final Es En Donde Parti",
      artista:"La Renga",
      album:"Despedazado Por Mil Partes",
      duracion:"3:30",
      promedio:4.5,
    },
    {
      titulo:"El Final Es En Donde Parti",
      artista:"La Renga",
      album:"Despedazado Por Mil Partes",
      duracion:"3:30",
      promedio:3.1,
    },
    {
      titulo:"El Final Es En Donde Parti",
      artista:"La Renga",
      album:"Despedazado Por Mil Partes",
      duracion:"3:30",
      promedio:4.2,
    }
  ];

  constructor(private modalService: NgbModal,private router:Router) { }

  ngOnInit(): void {
   
  }


  eliminarPlaylist(){
    const modalRef = this.modalService.open(QuestionComponent, { windowClass: 'modal-holder',size:'md', centered: true });
  }

  calificarPlaylist() {
    const modalRef = this.modalService.open(QualificationPlaylistComponent, { windowClass: 'modal-holder',size:'md', centered: true });
  }
  calificarCancion() {
    const modalRef = this.modalService.open(QualificationComponent, { windowClass: 'modal-holder',size:'md', centered: true });
  }

  seleccionarTema(i) {
    let temass = document.getElementsByClassName("tema-fila");

    console.log(i)
    for (let index = 0; index < temass.length; index++) {
      temass[index].className = "tema-fila";
      if(temass[index].getElementsByTagName('TH')[1].getElementsByTagName('DIV')!=null){
        let baxrr = temass[index].getElementsByTagName('TH')[1].getElementsByTagName('DIV')
        baxrr[0].className ="";

      }

    }

    temass[i].className = "tema-fila selected ";
    let barr = temass[i].getElementsByTagName('TH')[1].getElementsByTagName('DIV')
    barr[0].className ="barritas";
  }

  redirectTo(){
    let uri="home";
     this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
     this.router.navigate([uri]));
     setTimeout(() => {
       location.reload();
     }, 1000);
     
  }
  
}
