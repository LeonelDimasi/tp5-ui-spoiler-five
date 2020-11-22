import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PriceTableComponent } from '../popups/price-table/price-table.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( 
    private modalService: NgbModal
   
    ) {
   
   }

  ngOnInit(): void {
  }

  

  cambiarPlan() {
    const modalRef = this.modalService.open(PriceTableComponent, { windowClass: 'modal-holder', centered: true });
    modalRef.componentInstance.titulo = "Ventajas de ser Premium";
    
  }

}
