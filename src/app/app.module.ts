import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatExpansionModule } from '@angular/material/expansion';


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
    MatExpansionModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
