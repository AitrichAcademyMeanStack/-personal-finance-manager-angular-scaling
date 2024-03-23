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
      _id:[''],
      phone: [''],
      email: [''],
      username: [''],
      password: ['']
    });

    this.getuserdetails();
  }

  getuserdetails(){
    const id = `65fcfde89b5da09acbaff243`;
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




