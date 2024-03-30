import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/home/models/Profile';
import { User } from 'src/app/home/models/User';
import { ProfileService } from 'src/app/home/services/profile.service';
import { UserService } from 'src/app/home/services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  imageUrls: string | undefined;
  userId = '65fab73f1c860ff5e300098f';
  profile: Profile | any;
  user: User | any;
  detailsForm: any;
  constructor( private profileService: ProfileService, private userservice:UserService) { }
  ngOnInit(): void {
    this.getUserDetails();
    this.getProfilePic();
  }

   
  getUserDetails() {
    this.userservice.getuser(this.userId).subscribe((data) => {
      this.user = data; // Assuming user data is assigned here
      console.log('User data:', this.user);
    });}
  
  getProfilePic() {
    this.profileService.getProfilePic(this.userId).subscribe((res) => {
      console.log(res);
      this.imageUrls = res.imageUrl; // Assuming the response contains the profile picture URL
      console.log(this.imageUrls)
    });
  }
 

}
