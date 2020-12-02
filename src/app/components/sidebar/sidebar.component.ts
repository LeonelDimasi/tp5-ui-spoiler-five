import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goFaqs(){
    this.router.navigateByUrl('faqs');

    return this.router.navigate(['faqs']);
  }

  redirectTo(){
    let uri="faqs";
     this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
     this.router.navigate([uri]));
     setTimeout(() => {
       location.reload();
     }, 1000);
     
  }

  redirectToHome(){
    let uri="home";
     this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
     this.router.navigate([uri]));
     setTimeout(() => {
       location.reload();
     }, 1000);
     
  }

  
}
