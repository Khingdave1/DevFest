import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  hamClick: any;

  constructor() { }

  ngOnInit(): void {
  }

  // Toggle Menu
  openMenu() {
    this.hamClick = !this.hamClick
  }

  closeMenu() {
    this.hamClick = false

  }


}
