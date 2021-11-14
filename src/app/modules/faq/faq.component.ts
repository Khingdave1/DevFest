import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  faqQuest: any;
  yes: any;

  faqs = [
    { id: 1, question: "What is DevFest?", answer: "DevFests are community led developer events hosted by Google Developers Groups around the globe." },
    { id: 2, question: "What are GDGs?", answer: "GDGs are focused on community building and learning about Google’s technologies." },
    { id: 3, question: "Who can register for DevFest?", answer: "Beginners, experts, literally everyone. Anyone with the passion of learning, who’s fond of technology, passionate programmers , everybody can register and attend." },
    { id: 4, question: "What will attendees get by participating in the event?", answer: "We have a plethora of AMAZING perks awaiting for you!" },
  ]

  constructor() { }

  ngOnInit(): void {
    // this.yes = document.getElementsByClassName("faq-item-top");

    // Array.prototype.forEach.call(this.yes, i => {

    // });
  }

  showMore(event: any) {
    // this.yes = event.currentTarget.children[1]
    // this.yes.classList.toggle('show')

    this.faqQuest = event.currentTarget.parentElement.children[1]
    this.faqQuest.classList.toggle('show')

    console.log(this.faqQuest)
  }

}
