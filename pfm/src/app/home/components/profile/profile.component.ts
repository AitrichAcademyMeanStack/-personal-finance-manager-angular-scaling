import { Component,OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  myForm!: FormGroup;
  userData: any; // Variable to store user details
  editMode: boolean = false; // Flag to enable/disable edit mode

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      _id:[''],
     firstname:[''],
     lastname:['']
      
    });

    this.getuserdetails();
  }

  getuserdetails(){
    const id = `65fab73f1c860ff5e300098f`
    this.userService.getuser(id).subscribe((data)=>{
      this.myForm.patchValue(data)
    })
  }


  onsubmit(){
    if (this.myForm.valid) {
      const updatedvalue = this.myForm.value
      this.userService.edituser(updatedvalue).subscribe((res)=>{
        if (res) {
          if(this.myForm.value){
            alert("updated")
            console.log(res);
          }
        }
      })
    }
  }

}
