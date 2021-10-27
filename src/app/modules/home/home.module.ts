import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { SchedulesComponent } from './schedules/schedules.component';
import { AitComponent } from './ait/ait.component';
import { VenueComponent } from './venue/venue.component';



@NgModule({
  declarations: [
    HomeComponent,
    EventsComponent,
    SchedulesComponent,
    AitComponent,
    VenueComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    EventsComponent,
    SchedulesComponent
  ]
})
export class HomeModule { }
