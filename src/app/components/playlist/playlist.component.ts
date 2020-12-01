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
