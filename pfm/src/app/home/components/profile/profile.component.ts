


// import { User } from './../../models/User';
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { UserService } from '../../services/user.service';
// import { ProfileService } from '../../services/profile.service';
// import { Profile } from '../../models/Profile';
// // import { User } from '../../models/User';

// @Component({
//   selector: 'app-profile',
//   templateUrl: './profile.component.html',
//   styleUrls: ['./profile.component.css']
// })
// export class ProfileComponent implements OnInit {
//   detailsForm!: FormGroup;
//   picForm!: FormGroup;
//   imageUrls: string | undefined;
//   selectedFile: File | undefined;
//   userId = '65fab73f1c860ff5e300098f'; // Replace with actual user ID
//   profile: Profile | any;
//   user: User | any;

//   constructor(private fb: FormBuilder, private userService: UserService, private profileService: ProfileService) { }

//   ngOnInit(): void {
//     this.detailsForm = this.fb.group({
//       firstname: [''],
//       lastname: [''],
//     });

//     this.picForm = this.fb.group({
//       imageUrls: ['']
//     });

//     this.getuserdetails();
//     this.getProfilePic();
//   }

//   getuserdetails() {
//     this.userService.getuser(this.userId).subscribe((data) => {
//       this.detailsForm.patchValue(data);
//     });
//   }

//   submitDetails() {
//     if (this.detailsForm.valid) {
//       const updatedValue = this.detailsForm.value;
//       this.userService.edituser(updatedValue).subscribe((res) => {
//         if (res) {
//           alert("Profile details updated");
//           this.user = res;
//           console.log(res);
//         }
//       });
//     }
//   }

//   submitPic() {
//     if (!this.selectedFile) {
//       alert("Please select a file.");
//       return;
//     }

//     this.profileService.uploadProfilePic(this.userId, this.selectedFile).subscribe((res) => {
//       console.log('Profile picture uploaded successfully');
//       this.getProfilePic();
//       this.profile=res
//     });
//   }

//   getProfilePic() {
//     this.profileService.getProfilePic(this.userId).subscribe((res) => {
//       console.log(res);
//       this. imageUrls = res.profilePic; // Assuming the response contains the profile picture URL
//     });
//   }

//   onFileSelected(event: any) {
//     this.selectedFile = event.target.files[0];
//   }
// }



// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { UserService } from '../../services/user.service';
// import { ProfileService } from '../../services/profile.service';
// import { Profile } from '../../models/Profile';
// import { User } from '../../models/User';

// @Component({
//   selector: 'app-profile',
//   templateUrl: './profile.component.html',
//   styleUrls: ['./profile.component.css']
// })
// export class ProfileComponent implements OnInit {
//   detailsForm!: FormGroup;
//   picForm!: FormGroup;
//   imageUrls: string | undefined;
//   selectedFile: File | undefined;
//   userId = '65fab73f1c860ff5e300098f'; // Replace with actual user ID
//   profile: Profile | any;
//   user: User | any;

//   constructor(private fb: FormBuilder, private userService: UserService, private profileService: ProfileService) { }

//   ngOnInit(): void {
//     this.detailsForm = this.fb.group({
//       firstname: [''],
//       lastname: [''],
//     });

//     this.picForm = this.fb.group({
//       imageUrls: ['']
//     });

//     this.getuserdetails();
//     this.getProfilePic();
//   }

//   getuserdetails() {
//     this.userService.getuser(this.userId).subscribe((data) => {
//       this.detailsForm.patchValue(data);
//     });
//   }

//   submitDetails() {
//     if (this.detailsForm.valid) {
//       const updatedValue = this.detailsForm.value;
//       this.userService.edituser(updatedValue).subscribe((res) => {
//         if (res) {
//           alert("Profile details updated");
//           this.user = res;
//           console.log(res);
//         }
//       });
//     }
//   }

//   submitPic() {
//     if (!this.selectedFile) {
//       alert("Please select a file.");
//       return;
//     }

//     this.profileService.uploadProfilePic(this.userId, this.selectedFile).subscribe((res) => {
//       console.log('Profile picture uploaded successfully');
//       this.getProfilePic();
//       this.profile=res
//     });
//   }

//   getProfilePic() {
//     this.profileService.getProfilePic(this.userId).subscribe((res) => {
//       console.log(res);
//       this.imageUrls = res.imageUrl; // Assuming the response contains the profile picture URL
//     });
//   }

//   onFileSelected(event: any) {
//     this.selectedFile = event.target.files[0];
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ProfileService } from '../../services/profile.service';
import { Profile } from '../../models/Profile';
import { User } from '../../models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  detailsForm!: FormGroup;
  picForm!: FormGroup;
  imageUrls: string | undefined;
  selectedFile: File | undefined;
  userId = '65fab73f1c860ff5e300098f'; // Replace with actual user ID
  profile: Profile | any;
  user: User | any;

  constructor(private fb: FormBuilder, private userService: UserService, private profileService: ProfileService) { }

  ngOnInit(): void {
    this.detailsForm = this.fb.group({
      firstname: [''],
      lastname: [''],
    });

    this.picForm = this.fb.group({
      ProfilePicture: ['']
    });

    this.getUserDetails();
    this.getProfilePic();
  }

  getUserDetails() {
    this.userService.getuser(this.userId).subscribe((data) => {
      this.detailsForm.patchValue(data);
    });
  }

  submitDetails() {
    if (this.detailsForm.valid) {
      const updatedValue = this.detailsForm.value;
      this.userService.edituser(updatedValue).subscribe((res) => {
        if (res) {
          alert("Profile details updated");
          this.user = res;
          console.log(res);
        }
      });
    }
  }

  submitPic() {
    if (!this.selectedFile) {
      alert("Please select a file.");
      return;
    }

    this.profileService.uploadProfilePic(this.userId, this.selectedFile).subscribe((res) => {
      console.log('Profile picture uploaded successfully');
      alert("photo uploaded")
      this.getProfilePic();
      this.profile = res;
    });
  }

 


  getProfilePic() {
    this.profileService.getProfilePic(this.userId).subscribe((res) => {
      console.log(res);
      this.imageUrls = res.imageUrl; // Assuming the response contains the profile picture URL
      console.log(this.imageUrls)
    });
  }
  


  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
}
