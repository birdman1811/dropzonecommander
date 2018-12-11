import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @ViewChild('stickyMenu') menuElement: ElementRef;
  

  constructor() { }

  sticky: boolean = false;

  menuPosition: any;

ngAfterViewInit(){
    this.menuPosition = this.menuElement.nativeElement.offsetTop
}

@HostListener('window:scroll', ['$event'])
    handleScroll(){
        const windowScroll = window.pageYOffset;
        if(windowScroll >= this.menuPosition){
            this.sticky = true;
        } else {
            this.sticky = false;
        }
    }

   myFunction(): void {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  

  

  ngOnInit() {
  }

}
