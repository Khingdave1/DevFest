import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teamMembers = [
    { id: 1, image: '../../../assets/img/team/ayodeji_ogundare.jpg', name: "Ayodeji Ogundare", role: "GDG Organizer", twitter: "Twitter", linkedin: "LinkedIn" },
    { id: 2, image: '../../../assets/img/team/blessing_eloho_awhensebe.jpg', name: "Blessing Eloho Awhensebe", role: "WTM Ambassador", twitter: "Twitter", linkedin: "LinkedIn" },
    { id: 3, image: '../../../assets/img/home.7c51634b.jpg', name: "Enakhe Theophilus", role: "Assistant Organizer", twitter: "Twitter", linkedin: "LinkedIn" },
    { id: 4, image: '../../../assets/img/team/aremu_david.jpeg', name: "Aremu David", role: "Chapter Mentor", twitter: "Twitter", linkedin: "https://www.linkedin.com/in/aremu-david-64a63a193/" },
    { id: 5, image: '../../../assets/img/home.7c51634b.jpg', name: "Ajayi Olawale", role: "Chapter Mentor", twitter: "Twitter", linkedin: "LinkedIn" },
    { id: 6, image: '../../../assets/img/home.7c51634b.jpg', name: "Idibia Isaac", role: "Chapter Mentor", twitter: "Twitter", linkedin: "LinkedIn" },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
