import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(public httpSerObj:HttpClient,public userSerObj:UserService) { }


  //post favorites
  mainObj={
    "userName":"none",
    "property":{}
   }

   loginObj;
 addFavorites(favObj):Observable<any>{
   this.userSerObj.getUserData().subscribe({
     next:(res)=>{
       if(res==null){
         this.loginObj={"username":"nouser"}
       }
       else{
         this.loginObj = res
         this.mainObj.userName = res.username
         this.mainObj.property = favObj
       }
     }
   })
   console.log(this.mainObj)
   return this.httpSerObj.post(`http://localhost:5000/favorite/${this.loginObj.username}/addfavorites`,this.mainObj)
 }

 //get by user
 getFavorites():Observable<any>{
  this.userSerObj.getUserData().subscribe({
    next:(res)=>{
      if(res==null){
        this.loginObj={"username":"nouser"}
      }
      else{
        this.loginObj = res
      }
    }
  })
   return this.httpSerObj.get(`http://localhost:5000/favorite/${this.loginObj.username}/viewfavorites`)
 }


 //viewmore
 viewbhSubject = new BehaviorSubject(null)
 getview(){
   return this.viewbhSubject
 }
}
