import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public formBuildObj:FormBuilder,public routerObj:Router,public userSerObj:UserService) { }

  userRegistration:FormGroup;

  ngOnInit(): void {
   this.userRegistration=this.formBuildObj.group({
      username:['',Validators.required],
      password:['',Validators.required],
      email:['',Validators.required],
      age:['',Validators.required]
    })
  
  }

  submit(){
    console.log(this.userRegistration.value)
    this.userSerObj.userPost(this.userRegistration.value).subscribe({
      next:(res)=>{
        if(res.message=="user already existed"){
            alert("user already existed")
        }
        else if(res.message=="user created"){
          alert("user created succesfully")
          this.routerObj.navigateByUrl("/login")
        }
      },
      error:(err)=>{
        alert("error")
      }
    })
  }

}
