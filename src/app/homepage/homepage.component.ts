import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  @ViewChild('registerDialog') registerDialog!: TemplateRef<any>;
  registerDialogRef!: MatDialogRef<any>;
  constructor(public dialog: MatDialog){}

  openRegisterForm(){
    this.registerDialogRef = this.dialog.open(RegisterComponent, {
      width: '50%',
      height: '95%',
      disableClose: true,
      panelClass: 'confirm-dialog-container',
      hasBackdrop: true,
    });
  }
}
