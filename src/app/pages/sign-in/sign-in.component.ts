/*
*============================
*Author: Richard Krasso
*Edited by: Gabriel Sanchez
*Date: 3/20/2020
*=============================
*/

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ControlContainer } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})


  export class SigninComponent implements OnInit {
    form: FormGroup;

    constructor(
      private router: Router,
      private cookieService: CookieService,
      private fb: FormBuilder,
      private http: HttpClient,
      private snackBar: MatSnackBar
    ) {}

    ngOnInit() {
      this.form = this.fb.group({
        empId: [
          null,
          Validators.compose([
            Validators.required,
            Validators.pattern("^[0-9]*$")
          ])
        ]
      });
    }

    login() {
      const empId = this.form.controls["empId"].value;
      console.log(empId);
      this.http.get("/api/employees/" + empId).subscribe(res => {
        if (res) {
          this.cookieService.set("session_user", empId,  1);

          this.router.navigate(["/"]);

        } else {
          this.snackBar.open(
            "The employee ID you entered is invalid, please try again.",
            "ERROR",
            {
              duration: 3000,
              verticalPosition: "top"
            }
          );

        }
      });
      // get all info


    }

    // new cookie inside the component


  }
