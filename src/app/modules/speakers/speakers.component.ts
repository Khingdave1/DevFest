import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit {

  speakers = [
    { id: 1, image: '../../../assets/img/home.7c51634b.jpg', name: "Name", role: "Role", twitter: "Twitter", linkedin: "LinkedIn" },
    { id: 2, image: '../../../assets/img/home.7c51634b.jpg', name: "Name", role: "Role", twitter: "Twitter", linkedin: "LinkedIn" },
    { id: 3, image: '../../../assets/img/home.7c51634b.jpg', name: "Name", role: "Role", twitter: "Twitter", linkedin: "LinkedIn" },
    { id: 4, image: '../../../assets/img/home.7c51634b.jpg', name: "Name", role: "Role", twitter: "Twitter", linkedin: "LinkedIn" },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
