import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  constructor(private modalService: NgbModal,private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }
  closePopUp(){
    this.activeModal.close();
  }
  eliminarPlaylist(){
    const modalRef = this.modalService.open(QuestionComponent, { windowClass: 'modal-holder',size:'m', centered: true });
  }
}
