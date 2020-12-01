import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-qualification-playlist',
  templateUrl: './qualification-playlist.component.html',
  styleUrls: ['./qualification-playlist.component.scss']
})
export class QualificationPlaylistComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }
  closePopUp(){
    this.activeModal.close();
  }
}
