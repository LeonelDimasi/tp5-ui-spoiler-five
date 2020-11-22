import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PriceTableComponent } from '../popups/price-table/price-table.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  hamburguesa = false;
  constructor( 
    private modalService: NgbModal
   
    ) {
   
   }

  ngOnInit(): void {
  }

  

  cambiarPlan() {
    const modalRef = this.modalService.open(PriceTableComponent, { windowClass: 'modal-holder',size:'xl', centered: true });
    
  }

  toggleHamburguesa(){
   
    this.hamburguesa = !this.hamburguesa;
  }

}
