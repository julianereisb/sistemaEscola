import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClassesEditComponent } from './components/classes-edit/classes-edit.component';
import { ClassesListComponent } from './components/classes-list/classes-list.component';
import { SchoolListComponent } from './components/school-list/school-list.component';
import { SchoolEditComponent } from './components/school-edit/school-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassesEditComponent,
    ClassesListComponent,
    SchoolListComponent,
    SchoolEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
