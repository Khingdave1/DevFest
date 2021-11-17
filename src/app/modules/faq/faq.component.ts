import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  faqQuest: any;

  data: any =
    [
      {
        "parentName": "What is DevFest?",
        "childProperties":
          [
            { "propertyName": "DevFests are community led developer events hosted by Google Developers Groups around the globe." }
          ]
      },
      {
        "parentName": "What are GDGs?",
        "childProperties":
          [
            { "propertyName": "GDGs are focused on community building and learning about Google’s technologies" }
          ]
      },
      {
        "parentName": "Who can register for DevFest?",
        "childProperties":
          [
            { "propertyName": "Beginners, experts, literally everyone. Anyone with the passion of learning, who’s fond of technology, passionate programmers , everybody can register and attend." }
          ]
      },
      {
        "parentName": "What will attendees get by participating in the event?",
        "childProperties":
          [
            { "propertyName": "We have a plethora of AMAZING perks awaiting for you!" }
          ]
      }
    ]

  constructor() { }

  ngOnInit(): void {
    // this.yes = document.getElementsByClassName("faq-item-top");

    // Array.prototype.forEach.call(this.yes, i => {

    // });


  }

  // showMore(event: any) {
  //   // this.yes = event.currentTarget.children[1]
  //   // this.yes.classList.toggle('show')

  //   this.faqQuest = event.currentTarget.parentElement.children[1]
  //   this.faqQuest.classList.toggle('show')

  //   console.log(this.faqQuest)
  // }

  toggleAccordian(event: any, index: any) {
    // var element = event.target;
    // element.classList.toggle("active");
    var panel = event.currentTarget.parentElement.children[1];
    panel.classList.toggle("show");
    // if (this.data[index].isActive) {
    //   this.data[index].isActive = false;
    // } else {
    //   this.data[index].isActive = true;
    // }
    // var panel = element.nextElementSibling;
    // if (panel.style.maxHeight) {
    //   panel.style.maxHeight = null;
    // } else {
    //   panel.classList.toggle("show");
    // }
  }

}
