import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teamMembers = [
    { id: 0, image: '../../../assets/img/team/ayodeji_ogundare.jpg', name: "Ayodeji Ogundare", role: "GDG Organizer", twitter: "https://twitter.com/dejisol", linkedin: "https://www.linkedin.com/in/dejisol" },
    { id: 1, image: '../../../assets/img/team/blessing_eloho_awhensebe.jpg', name: "Blessing Eloho Awhensebe", role: "WTM Ambassador", twitter: "Twitter", linkedin: "LinkedIn" },
    { id: 2, image: '../../../assets/img/home.7c51634b.jpg', name: "Enakhe Theophilus", role: "Assistant Organizer", twitter: "Twitter", linkedin: "LinkedIn" },
    { id: 3, image: '../../../assets/img/team/aremu_david.jpeg', name: "Aremu David", role: "Chapter Mentor", twitter: "https://twitter.com/Khingdave2", linkedin: "https://www.linkedin.com/in/aremu-david-64a63a193" },
    { id: 4, image: '../../../assets/img/team/ajayi_olawale.jpeg', name: "Ajayi Olawale", role: "Chapter Mentor", twitter: "https://twitter.com/Thenameis_Horla", linkedin: "https://www.linkedin.com/in/ajayi-olawale-107674192" },
    { id: 5, image: '../../../assets/img/team/idibia_isaac.jpeg', name: "Idibia Isaac", role: "Chapter Mentor", twitter: "https://twitter.com/IsaacIdibia", linkedin: "https://www.linkedin.com/in/isaac-idibia-105059171" },
    { id: 6, image: '../../../assets/img/team/Chidiebere_eucharia.jpeg', name: "Chidiebere Eucharia Okoli", role: "Chapter Mentor", twitter: "https://twitter.com/cayriah", linkedin: "https://linkedin.com/in/cayriah" },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
