import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit {

  speakers: any;
  loading: true;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://sessionize.com/api/v2/tgc3rlcs/view/Speakers').subscribe((res: any) => {
      this.speakers = []
      res.forEach((r: any) => {
        let item = r
        this.speakers.push(item)
        console.log(item)
      });
    })
  }

}
