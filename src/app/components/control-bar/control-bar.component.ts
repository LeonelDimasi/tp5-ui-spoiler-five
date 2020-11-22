import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QualificationComponent } from '../popups/qualification/qualification.component';

@Component({
  selector: 'app-control-bar',
  templateUrl: './control-bar.component.html',
  styleUrls: ['./control-bar.component.scss']
})
export class ControlBarComponent implements OnInit {
   myMedia = document.createElement('audio');
  constructor( private modalService: NgbModal) { }

  ngOnInit(): void {
    
  }
  calificarCancion() {
    const modalRef = this.modalService.open(QualificationComponent, { windowClass: 'modal-holder',size:'xl', centered: true });
    
  }
  
	

}
