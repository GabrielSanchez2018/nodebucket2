import {Routes} from '@angular/router';
/*
*============================
*Author: Richard Krasso
*Edited by: Gabriel Sanchez
*Date: 3/10/2020
*=============================
*/


import { BaseLayoutComponent } from "./shared/base-layout/base-layout.component";
import { HomeComponent } from "./pages/home/home.component";
import { SigninComponent } from "./pages/sign-in/sign-in.component";
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TaskCreateDialogComponent } from './shared/task-create-dialog/task-create-dialog.component';

export const AppRoutes: Routes = [
  {
    path: "",
    component: BaseLayoutComponent,
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "signin",
        component: SigninComponent
      },
      {
        path: "about",
        component: AboutComponent
      },
      {
        path: "task-create-dialog",
        component: TaskCreateDialogComponent
      },
      {
        path: "**",
        pathMatch: 'full',
        component: NotFoundComponent
      }
    ]
  }
];
