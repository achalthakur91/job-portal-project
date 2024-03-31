import { Component, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'machinetest';
  @ViewChild('registerDialog') registerDialog!: TemplateRef<any>;
  registerDialogRef!: MatDialogRef<any>;
  constructor(private r :Router,public dialog: MatDialog){}
  
  show(){
  this.r.navigate(['/register'])
}
navItems = [
  { label: 'Home', route: '/' },
  { label: 'Profile', route: '/profile' },
  { label: 'About', route: '/about' },
  { label: 'Services', route: '/services' },
  { label: 'Client', route: '/client' },
  { label: 'Contact', route: '/contact' }
];
checkActiveRoute(route: string): boolean {
  return this.r.url === route;
}
toggleActive(item: any) {
  // this.navItems.forEach(navItem => {
  //   navItem.active = false;
  // });
  // item.active = true;
  this.r.navigate([item.route]); // Optionally navigate to the selected route
}

openRegistrationForm(): void {
  const dialogRef = this.dialog.open(RegisterComponent, {
    width: '500px', // Adjust the width as needed
    disableClose: true, // Prevent closing the dialog by clicking outside or pressing Escape
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    // You can handle any result returned from the dialog here
  });
}
// openRegisterDialog(): void {
//   this.registerDialogRef = this.dialog.open(this.registerDialog, {
//     width: '500px', // Adjust the width as needed
//     disableClose: true, // Prevent closing the dialog by clicking outside or pressing Escape
//   });

//   this.registerDialogRef.afterClosed().subscribe(result => {
//     console.log('The register dialog was closed');
//     // You can handle any result returned from the dialog here
//   });
// }
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
