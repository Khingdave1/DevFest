import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  schedule = [
    { id: 1, startTime: "9am", stopTime: "10am", agenda: "Attendee checkin" },
    { id: 2, startTime: "10am", stopTime: "10:15am", agenda: "Breakfast" },
    { id: 3, startTime: "10:15am", stopTime: "10:40am", agenda: "Welcome address/Keynote" },
    { id: 4, startTime: "10:40am", stopTime: "11:15am", agenda: "Networking your way to success" },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
