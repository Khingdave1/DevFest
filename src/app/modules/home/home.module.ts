import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent,
    EventsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    EventsComponent
  ]
})
export class HomeModule { }
