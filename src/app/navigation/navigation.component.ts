import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SignInComponent } from '../sign-in/sign-in.component';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
open = false;
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openSignUp(){
    this.dialog.open(SignUpComponent);
  }
  openSignIn(){
    this.dialog.open(SignInComponent);
  }

}
