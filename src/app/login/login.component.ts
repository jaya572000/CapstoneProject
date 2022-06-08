import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public formBuilderObj:FormBuilder,public userSerObj:UserService,public routerObj:Router) { }

  userLogin:FormGroup
  ngOnInit(): void {
    
  this.userLogin=this.formBuilderObj.group({
    username:['',Validators.required],
    password:['',Validators.required]
  })

  }

  submit(){
    this.userSerObj.loginObj(this.userLogin.value).subscribe({
      next:(res)=>{
        if(res.message=="invalid user"){
            alert("invalid user")
        }
        else if(res.message=="invalid password"){
            alert("invalid password")
        }
        else if(res.message=="login success"){
          localStorage.setItem("token",res.token)
          this.routerObj.navigateByUrl("/home")
          this.userSerObj.getUserData().next(res.user)
        }
      }
    })
  }

}
