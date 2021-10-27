import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teamMembers = [
    { id: 1, image: '../../../assets/img/home.7c51634b.jpg', name: "Name", role: "Role", twitter: "Twitter", linkedin: "LinkedIn" },
    { id: 2, image: '../../../assets/img/home.7c51634b.jpg', name: "Name", role: "Role", twitter: "Twitter", linkedin: "LinkedIn" },
    { id: 3, image: '../../../assets/img/home.7c51634b.jpg', name: "Name", role: "Role", twitter: "Twitter", linkedin: "LinkedIn" },
    { id: 4, image: '../../../assets/img/home.7c51634b.jpg', name: "Name", role: "Role", twitter: "Twitter", linkedin: "LinkedIn" },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
