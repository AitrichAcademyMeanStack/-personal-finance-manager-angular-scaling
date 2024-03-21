import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit{

  myForm!: FormGroup;
  userData: any; // Variable to store user details
  editMode: boolean = false; // Flag to enable/disable edit mode

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    // Fetch user details on component initialization
    this.getUserDetails();
  }

  getUserDetails() {
    const userId = `65fab73f1c860ff5e300098f`; // Replace with the actual user ID
    this.userService.getuser(userId).subscribe(
      (response: any) => {
        this.userData = response; // Store user details
        this.populateForm(); // Populate form with user details
      },
      (error: any) => {
        console.error('Error fetching user details:', error);
      }
    );
  }

  populateForm() {
    this.myForm.patchValue({
      phone: this.userData.phone,
      email: this.userData.email,
      username: this.userData.username,
      password: this.userData.password,
    });
  }

  onSubmit(): void {
    if (this.myForm.valid) {
      const userId = `65fab73f1c860ff5e300098f`; // Replace with the actual user ID
      const updatedUserData = this.myForm.value;
      this.userService.edituser(userId, updatedUserData).subscribe(
        (response: any) => {
          console.log('User details updated successfully:', response);
          // Optionally, reset the form after successful submission
          // this.myForm.reset();
          this.editMode = false; // Disable edit mode after successful submission
        },
        (error: any) => {
          console.error('Error updating user details:', error);
        }
      );
    } else {
      // Form is invalid, handle accordingly
    }
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
    if (!this.editMode) {
      // If edit mode is disabled, populate form with current user details
      this.populateForm();
    }
  }

  editUser() {
    this.editMode = true;
   alert("succes")
  }
}




