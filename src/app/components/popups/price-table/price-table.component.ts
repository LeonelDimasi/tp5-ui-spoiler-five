import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-price-table',
  templateUrl: './price-table.component.html',
  styleUrls: ['./price-table.component.scss']
})
export class PriceTableComponent implements OnInit {

  constructor( private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }
  closePopUp(){
    this.activeModal.close();
  }
}
