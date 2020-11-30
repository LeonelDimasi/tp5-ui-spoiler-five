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

  searchlist;
  searchlistItems ;
  searchbox;
  input ;
  icon ;
  constructor(
    private modalService: NgbModal

  ) {

  }

  ngOnInit(): void {
    this.searchlist = document.querySelector(".js-searchlist");
    this.searchlistItems = document.querySelector(".js-searchlist-item-wrapper");
    this.searchbox = document.querySelector(".js-searchbox");
    this.input = document.querySelector(".js-input");
    this.icon = document.querySelector(".js-searchbox-icon");
    this.search();
  }



  cambiarPlan() {
    const modalRef = this.modalService.open(PriceTableComponent, { windowClass: 'modal-holder', size: 'xl', centered: true });

  }

  toggleHamburguesa() {

    this.hamburguesa = !this.hamburguesa;
  }

  search() {
    this.input.onfocus = this.showSearchlist;
    //window.onclick = this.closeSearchlist(e); 
    let users = [
      { name: "Lito Ming", user: "@LM2342314" },
      { name: "Dr Mühlberger", user: "@DR2342314" },
      { name: "Ana María Casanova", user: "@MC2342314" },
      { name: "Sofovich", user: "@Gerardo2342314" },
      { name: "Jorge Porcel Jr.", user: "@JpJ2342314" }
    ];

    users.map(function (e) {
      this.searchlistItems.innerHTML = this.searchlistItems.innerHTML.concat(`
       <div class="searchlist-item">
          <div class="searchlist-item-pic">
            <img class="searchlist-item-pic-img" src="https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/egg-3442-e1f6463624338504cd021bf23aef8441@1x.jpg">
          </div>
          <div class="searchlist-item-info">
            <div class="searchlist-item-info-name">${e.name}</div>
            <div class="searchlist-item-info-user">${e.user}</div>
          </div>
          <div class="searchlist-item-clear"><i class="fas fa-times"></i></div>
        </div>
  `);
    });


  }

   showSearchlist() {
    this.searchlist.classList.add("searchlistVisible");
    this.searchbox.classList.add("searchbox-searchlistVisible");
  }

   closeSearchlist(e) {
    if (!this.searchlist.contains(e.target) && !this.searchbox.contains(e.target)) {
      this.searchlist.classList.remove("searchlistVisible");
      this.searchbox.classList.remove("searchbox-searchlistVisible");
    }
  }

   clearInnerHtml(query) {
    const element = document.querySelector(query);
    element.innerHTML = null;
  }

}
