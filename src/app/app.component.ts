import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'back';

  searchTerm:String;
  constructor(public userSerObj:UserService,public routerObj:Router){}

  userlogout(){
    this.userSerObj.logout()
    this.routerObj.navigateByUrl('/home')
  }

  search(){
    this.userSerObj.searchTerm.next(this.searchTerm)
  }
}
