import { User } from './../../models/User';
// import { Component,OnInit} from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { UserService } from '../../services/user.service';
// import {ProfileService} from '../../services/profile.service'

// @Component({
//   selector: 'app-profile',
//   templateUrl: './profile.component.html',
//   styleUrls: ['./profile.component.css']
// })
// export class ProfileComponent implements OnInit{
//   myForm!: FormGroup;
//   userData: any; // Variable to store user details
//   editMode: boolean = false; // Flag to enable/disable edit mode

//   constructor(private fb: FormBuilder, private userService: UserService, private profileservice:ProfileService) { }

//   ngOnInit(): void {
//     this.myForm = this.fb.group({
//       _id:[''],
//      firstname:[''],
//      lastname:['']
      
//     });

//     this.getuserdetails();
//   }

//   getuserdetails(){
//     const id = `65fcfde89b5da09acbaff243`;
//     this.userService.getuser(id).subscribe((data)=>{
//       this.myForm.patchValue(data)
//     })
//   }


//   onsubmit(){
//     if (this.myForm.valid) {
//       const updatedvalue = this.myForm.value
//       this.userService.edituser(updatedvalue).subscribe((res)=>{
//         if (res) {
//           if(this.myForm.value){
//             alert("updated")
//             console.log(res);
//           }
//         }
//       })
//     }
//   }

//   uploadprofilepic(){};


//   getprofilepic(){};

// }

// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { UserService } from '../../services/user.service';
// import { ProfileService } from '../../services/profile.service';

// @Component({
//   selector: 'app-profile',
//   templateUrl: './profile.component.html',
//   styleUrls: ['./profile.component.css']
// })
// export class ProfileComponent implements OnInit {
//   myForm!: FormGroup;
//   profileImage: any; // Variable to store profile image
//   selectedFile: File | undefined;

//   constructor(private fb: FormBuilder, private userService: UserService, private profileService: ProfileService) { }

//   ngOnInit(): void {
//     this.myForm = this.fb.group({
//       firstname: [''],
//       lastname: ['']
//     });

//     this.getuserdetails();
//     this.getProfilePic(); // Fetch profile picture when component initializes
//   }

//   getuserdetails() {
//     const id = `65fab73f1c860ff5e300098f`;
//     this.userService.getuser(id).subscribe((data) => {
//       this.myForm.patchValue(data);
//     });
//   }

//   onsubmit() {
//     if (this.myForm.valid) {
//       const updatedValue = this.myForm.value;
//       this.userService.edituser(updatedValue).subscribe((res) => {
//         if (res) {
//           if (this.myForm.value) {
//             alert("updated");
//             console.log(res);
//           }
//         }
//       });
//     }
//   }

//   onFileSelected(event: any) {
//     this.selectedFile = event.target.files[0];
//   }

//   uploadProfilePic() {
//     if (!this.selectedFile) {
//       alert("Please select a file.");
//       return;
//     }

//     const id = '65fab73f1c860ff5e300098f'; // Assuming this is the user's ID
//     const formData: FormData = new FormData();
//     formData.append('file', this.selectedFile);

//     this.profileService.uploaprofilepic(id, formData).subscribe((res) => {
//       // Handle response as needed
//       console.log(res);
//       this.getProfilePic(); // Fetch updated profile picture after upload
//     });
//   }

//   getProfilePic() {
//     const id = '65fab73f1c860ff5e300098f'; // Assuming this is the user's ID
//     this.profileService.getprofilepic(id).subscribe((res) => {
//       // Assuming the response contains the image URL in res.profilePic
//       this.profileImage = res.profilePic;
//     });
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { ProfileService } from '../../services/profile.service';
// import { UserService } from '../../services/user.service';
// import { Profile } from '../../models/Profile';

// @Component({
//   selector: 'app-profile',
//   templateUrl: './profile.component.html',
//   styleUrls: ['./profile.component.css']
// })
// export class ProfileComponent implements OnInit {



//   myForm!: FormGroup ;
//   profileImage: string | undefined;
//   selectedFile: File|any ;
// imageUrls: any;


//   constructor(private fb: FormBuilder, private userService: UserService, private profileService: ProfileService) { }

//   ngOnInit(): void {
//     this.myForm = this.fb.group({
//       firstname: [''],
//       lastname: ['']
//     });
//     this.getuserdetails();
//     this.getProfilePic();
//   }
 
//   getuserdetails() {
//         const id = `65fab73f1c860ff5e300098f`;
//         this.userService.getuser(id).subscribe((data) => {
//           this.myForm.patchValue(data);
//         });
//       }

//       onsubmit() {
//             if (this.myForm.valid) {
//               const updatedValue = this.myForm.value;
//               this.userService.edituser(updatedValue).subscribe((res) => {
//                 if (res) {
//                   if (this.myForm.value) {
//                     alert("updated");
//                     console.log(res);
//                   }
//                 }
//               });
//             }
//           }
        

//           clearForm() {
//             throw new Error('Method not implemented.');
//             }
            
            
//             upload($event: Event) {
//             throw new Error('Method not implemented.');
//             }


//   onFileSelected(event: any) {
//     this.selectedFile = event.target.files[0];
//   }

//   uploadProfilePic() {
//     if (!this.selectedFile) {
//       alert("Please select a file.");
//       return;
//     }

//     const userId = '65fab73f1c860ff5e300098f'; // Replace with actual user ID
//     this.profileService.uploadProfilePic(userId, this.selectedFile).subscribe((res) => {
//       console.log('Profile picture uploaded successfully');
//       this.getProfilePic();
//     });
//   }

//   getProfilePic() {
//     const userId = '65fab73f1c860ff5e300098f'; // Replace with actual user ID
//     this.profileService.getProfilePic(userId).subscribe((res) => {
//       console.log(res);
//       this.profileImage = res.profilePic; // Assuming the response contains the profile picture URL
//     });
//   }
// }


// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { UserService } from '../../services/user.service';
// import { ProfileService } from '../../services/profile.service';
// import { Profile } from '../../models/Profile';


// @Component({
//   selector: 'app-profile',
//   templateUrl: './profile.component.html',
//   styleUrls: ['./profile.component.css']
// })
// export class ProfileComponent implements OnInit {
// picform!: any;
// clearForm() {
// throw new Error('Method not implemented.');
// }
//   myForm!: FormGroup;
//   profileImage: string | undefined;
//   selectedFile: File | undefined;
//   userId = '65fab73f1c860ff5e300098f'; // Replace with actual user ID
//   profile: Profile | any;
//   user:User|any;

//   constructor(private fb: FormBuilder, private userService: UserService, private profileService: ProfileService) { }

//   ngOnInit(): void {
//     this.myForm = this.fb.group({
//       firstname: [''],
//       lastname: [''],
      
//     });

//     this.getuserdetails();
//     this.getProfilePic();
//   }

//   getuserdetails() {
//     this.userService.getuser(this.userId).subscribe((data) => {
//       this.myForm.patchValue(data);
//     });
//   }

//   onsubmit() {
//     if (this.myForm.valid) {
//       const updatedValue = this.myForm.value;
//       this.userService.edituser(updatedValue).subscribe((res) => {
//         if (res) {
//           alert("Updated");
          
//           this.user = res;
//           console.log(res);
//         }
//       });
//     }
//   }

//   onFileSelected(event: any) {
//     this.selectedFile = event.target.files[0];
//   }

//   uploadProfilePic() {
//     if (!this.selectedFile) {
//       alert("Please select a file.");
//       return;
//     }

//     this.profileService.uploadProfilePic(this.userId, this.selectedFile).subscribe((res) => {
//       console.log('Profile picture uploaded successfully');
//       this.getProfilePic();
//     });
//   }

//   getProfilePic() {
//     this.profileService.getProfilePic(this.userId).subscribe((res) => {
//       console.log(res);
//       this.profileImage = res.profilePic; // Assuming the response contains the profile picture URL
//     });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ProfileService } from '../../services/profile.service';
import { Profile } from '../../models/Profile';
// import { User } from '../../models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  detailsForm!: FormGroup;
  picForm!: FormGroup;
  profileImage: string | undefined;
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
      profilePic: ['']
    });

    this.getuserdetails();
    this.getProfilePic();
  }

  getuserdetails() {
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
      this.getProfilePic();
    });
  }

  getProfilePic() {
    this.profileService.getProfilePic(this.userId).subscribe((res) => {
      console.log(res);
      this.profileImage = res.profilePic; // Assuming the response contains the profile picture URL
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
}
