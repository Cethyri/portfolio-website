import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularMaterialModule } from "./modules/angular-material/angular-material.module";

import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { BioComponent } from './components/pages/bio/bio.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { PersonalProjectsComponent } from './components/pages/personal-projects/personal-projects.component';
import { ProfessionalProjectsComponent } from './components/pages/professional-projects/professional-projects.component';
import { ResumeComponent } from './components/pages/resume/resume.component';

import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [AppComponent, NavBarComponent, BioComponent, ContactComponent, PersonalProjectsComponent, ProfessionalProjectsComponent, ResumeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
