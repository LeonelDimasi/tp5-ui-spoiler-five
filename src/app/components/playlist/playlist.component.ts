import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QuestionComponent } from '../popups/question/question.component';
import { QualificationPlaylistComponent } from '../popups/qualification-playlist/qualification-playlist.component';
 
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

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }


  eliminarPlaylist(){
    const modalRef = this.modalService.open(QuestionComponent, { windowClass: 'modal-holder',size:'md', centered: true });
  }

  calificarPlaylist() {
    const modalRef = this.modalService.open(QualificationPlaylistComponent, { windowClass: 'modal-holder',size:'md', centered: true });
  }
}
