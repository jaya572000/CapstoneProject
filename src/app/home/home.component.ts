import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoriteService } from '../favorite.service';
import { GlobalrecommendationsService } from '../globalrecommendations.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  recomendations:any[]=[];

  constructor(public userSerObj:UserService,public favoriteObj:FavoriteService,public routerObj:Router) { }

  genre = ["Drama", "Fiction", "Comedy", "Philosophy", "Horror", "Thriller", "Art", "Science"]

  data;
  ngOnInit(): void {
    this.userSerObj.allBooks().subscribe({
      next:(res)=>{
        console.log(res.articles);
        this.data=res.articles
        this.iterateData = this.data
        this.userSerObj.productData.next(this.data)
      },
      error:(err)=>{
        console.log(err)
      }
    })
  
  }

  //explore
  viewdata(v){
    this.favoriteObj.getview().next(v)
    this.routerObj.navigateByUrl("/viewmore")
  }

  iterateData=[];
  finalData=[];
  selectGenre(v){
    if(v.target.value=="all" ){
        this.iterateData = this.data
    }
    else{
      this.finalData.splice(0,this.data.length)
      this.data.forEach(obj=>{
        if(v.target.value == obj.genre){
          this.finalData.push(obj)
        }
      })
      this.iterateData = this.finalData
      console.log(this.iterateData)
    }
  }


}