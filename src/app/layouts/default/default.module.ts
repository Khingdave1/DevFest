import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TeamComponent } from 'src/app/modules/team/team.component';
import { ScheduleComponent } from 'src/app/modules/schedule/schedule.component';
import { RegistrationComponent } from 'src/app/modules/registration/registration.component';
import { FaqComponent } from 'src/app/modules/faq/faq.component';
import { SpeakersComponent } from 'src/app/modules/speakers/speakers.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DefaultComponent } from './default.component';
import { HomeModule } from 'src/app/modules/home/home.module';



@NgModule({
  declarations: [
    DefaultComponent,
    TeamComponent,
    ScheduleComponent,
    RegistrationComponent,
    FaqComponent,
    SpeakersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    HomeModule
  ],
  exports: [
    DefaultComponent,
    TeamComponent,
    ScheduleComponent,
    RegistrationComponent,
    FaqComponent,
    SpeakersComponent
  ]
})
export class DefaultModule { }
