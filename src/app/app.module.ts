/*
*============================
*Author: Richard Krasso
*Edited by: Gabriel Sanchez
*Date: 3/10/2020
*=============================
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AppRoutes } from './app.routing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseLayoutComponent } from './shared/base-layout/base-layout.component';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';
import { HomeComponent } from './pages/home/home.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CookieService} from 'ngx-cookie-service'
import {DragDropModule} from '@angular/cdk/drag-drop';


import {
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule,
  MatCheckboxModule,
  MatListModule,
  MatSnackBarModule,
  MatDialogModule,
  MatDividerModule
} from "@angular/material";
import { SigninComponent } from './pages/sign-in/sign-in.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TaskCreateDialogComponent } from './shared/task-create-dialog/task-create-dialog.component';
import { AuthGurd } from './shared/gurds/auth.gurds';



@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    AuthLayoutComponent,
    HomeComponent,
    SigninComponent,
    AboutComponent,
    NotFoundComponent,
    TaskCreateDialogComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes, { useHash: true, enableTracing: false, scrollPositionRestoration: 'enabled'}),
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatMenuModule,
    MatCheckboxModule,
    MatListModule,
    MatSnackBarModule,
    MatDialogModule,
    DragDropModule,
    MatDividerModule


  ],
  providers: [
    CookieService, AuthGurd
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
