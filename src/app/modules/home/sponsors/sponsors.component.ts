import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit {

  sponsors = [
    { id: 1, image: '../../../../assets/img/googledevs logo.webp', name: "Name" },
    { id: 2, image: '../../../../assets/img/logo_JetBrains.webp', name: "JetBrains" }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
