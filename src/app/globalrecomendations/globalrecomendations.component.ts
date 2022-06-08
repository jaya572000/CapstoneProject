import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoriteService } from '../favorite.service';
import { GlobalrecommendationsService } from '../globalrecommendations.service';

@Component({
  selector: 'app-globalrecomendations',
  templateUrl: './globalrecomendations.component.html',
  styleUrls: ['./globalrecomendations.component.css']
})
export class GlobalrecomendationsComponent implements OnInit {


  recomendations:any[]=[];

  constructor( public recomendationsservObj:GlobalrecommendationsService,public favoriteObj:FavoriteService,public routerObj:Router) { }

  ngOnInit(): void {
    this.getrecomendations()
 
  }


  
//to get recomended books
getrecomendations(){
  this.recomendationsservObj.getrecomendations().subscribe({
    next:(res)=>{
      console.log(res);
     let payload=res.payload;
     this.recomendations=payload[0].recomendations
     console.log(this.recomendations);
    },
    error:(err)=>{
      console.log(err);
    }
  })
}

//view the book
viewdata(v){
  this.favoriteObj.getview().next(v)
  this.routerObj.navigateByUrl("/viewmore")
}

}
