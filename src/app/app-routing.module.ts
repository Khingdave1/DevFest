import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { FaqComponent } from './modules/faq/faq.component';
import { HomeComponent } from './modules/home/home.component';
import { RegistrationComponent } from './modules/registration/registration.component';
import { ScheduleComponent } from './modules/schedule/schedule.component';
import { SpeakersComponent } from './modules/speakers/speakers.component';
import { TeamComponent } from './modules/team/team.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: 'schedule', component: ScheduleComponent },
      { path: 'team', component: TeamComponent },
      { path: 'speakers', component: SpeakersComponent },
      { path: 'faq', component: FaqComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
