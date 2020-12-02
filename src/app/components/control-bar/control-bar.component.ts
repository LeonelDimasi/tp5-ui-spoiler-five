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
  volumen:number = 25;
  ngOnInit(): void {
    this.ponerPopover()
  }
  calificarCancion() {
    const modalRef = this.modalService.open(QualificationComponent, { windowClass: 'modal-holder',size:'md', centered: true });
  }
  /*
  cambiarVolumen(){
    let input = document.getElementById("volume");
    this.volumen = input.getAttribute('value').valueOf;
  }*/
	ponerPopover(){
    //$(document).ready(function(){
      //This triggers the pop over
    //  $('[data-toggle="popover"]').popover();   
      
      // Triggers content on the button all through JS
      //$('.btn-pop').popover({title: "<p>inside  popover</p>", content: "Text", html: true, placement: "right"}); 
      
    //});
  }

}
