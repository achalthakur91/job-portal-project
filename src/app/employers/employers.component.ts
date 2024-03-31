import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.css']
})
export class EmployersComponent {

  constructor(private r : MatDialog){
    let data=localStorage.getItem("profile")
    data=JSON.parse(data?data:"");
    this.populateFormWithData(data);
  }
  openDialog(){
    this.r.open(RegisterComponent);
  }
  funRestName(event: any) {
    if (event.target.selectionStart === 0 && event.code === 'Space') {
      event.preventDefault();
    }
    if (event.target.value.substr(-1) === ' ' && event.code === 'Space') {
      event.preventDefault();
      // this.toastr.error('Double space is not allowed');
    }

    var k;
    k = event.charCode;
    if ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32) {
    } else {
      // this.toastr.error('Number and special characters' + ' ' + 'not allowed');
    }

    return (k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32;
  }
  user = {
    photo: '',
    age: '',
    photoName:'',
    city:'',
    interest: '',
    firstName: '',
    lastName:"",
    mobile:"",
    addressType: 'Home',
    state:'',
    address: '',
    tags: '',
    companyAddress1: '',
    companyAddress2: '',
    country:'',
    subscribeToNewsletter:'',
  };
  uplEmployeeRoleList: any = [];
  formatLabel(value: any): string {
    if (value >= 100) {
      return (value) + '';
    }
    return `${value}`;
  }
  onCancelClick(): void {
    // this.dialogRef.close(); // Close the dialog when cancel is clicked
  }
 
  tagsArray:any=[]
  onEnterKeyPressed(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      console.log("event",event);
      this.tagsArray.push(this.user.tags.trim());
      this.user.tags = ''; // Clear the input field after adding the value to the array
    }
    console.log('tagsArray',this.tagsArray);
  }

 removeTag(index: any) {
    if (index >= 0 && index < this.tagsArray.length) {
      this.tagsArray.splice(index, 1); // Remove the tag at the specified index
    }
  }
  onSliderChange() {
    // You can perform any action here when the slider value changes
    console.log("Slider value:", this.user.age);
    // You can also update any other properties or perform any other logic based on the slider value
  }
  filePresent:any;
  onPhotoSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.filePresent=true;
      // Check if the file is an image (PNG or JPEG)
      if (file.type === 'image/png' || file.type === 'image/jpeg') {
        // Store the image name
        const imageName = file.name;
        
        // Create a FileReader object to read the file
        const reader = new FileReader();
        
        // Set up the FileReader onload event
        reader.onload = (e) => {
          // Get the base64 data of the uploaded image
          const base64Image = e.target?.result as string;
          
          // Store the image name and base64Image in your user object or wherever you need them
          this.user.photoName = imageName;
          this.user.photo = base64Image;
          
          // Optionally, you can display the uploaded image preview
          // this.photoPreview = base64Image;
        };
        
        // Read the file as a data URL (base64)
        reader.readAsDataURL(file);
      } else {
        // Display an error message if the file type is not supported
        console.error('Unsupported file type. Please upload a PNG or JPEG image.');
      }
    }
  }
  
  

  removeInterestTag(): void {
    // Handle removing interest tag logic
  }

  submitForm() {
    // if (this.registrationForm.valid) {
      const formData = {
        photo: this.user.photo, // Assuming user.photo holds the uploaded photo data
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        mobile: this.user.mobile,
        age: this.user.age,
        city: this.user.city,
        state: this.user.addressType === 'Home' ? this.user.state : '', // Assuming 'state' is for the Home address
        country: this.user.addressType === 'Home' ? this.user.country : '', // Assuming 'country' is for the Home address
        address: this.user.address,
        photoName:this.user.photoName,
        tags: this.tagsArray, // Assuming tagsArray holds the tags data
        subscribeToNewsletter: this.user.subscribeToNewsletter, // Assuming user.subscribeToNewsletter holds the checkbox value
      };
      localStorage.setItem('profile',JSON.stringify(formData))
      console.log('formData',formData);
  }
  profileImage:any;
  populateFormWithData(data:any) {
    console.log('data',data);
    // this.user.photo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABHMAAAJtCAYAAAC12TymAAAABHNCSVQICA";
    this.user.firstName = data.firstName;
    this.user.lastName = data.lastName;
    this.user.photoName = data.photoName;
    this.user.mobile = data.mobile;
    this.user.age = data.age;
    this.user.city = data.city;
    this.user.state = data.state;
    this.user.address = data.address;
    // this.user.tags = ["Cricket"];
    this.tagsArray= data.tags;
  }

  
  // onCancelClick() {
  //   // Reset form values or close the form popup/dialog
  // }
  

}
