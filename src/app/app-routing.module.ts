import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BioComponent } from './components/pages/bio/bio.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { PersonalProjectsComponent } from './components/pages/personal-projects/personal-projects.component';
import { ProfessionalProjectsComponent } from './components/pages/professional-projects/professional-projects.component';
import { ResumeComponent } from './components/pages/resume/resume.component';

const routes: Routes = [
  { path: '', component: BioComponent },
  { path: 'personal-projects', component: PersonalProjectsComponent },
  { path: 'professional-projects', component: ProfessionalProjectsComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
