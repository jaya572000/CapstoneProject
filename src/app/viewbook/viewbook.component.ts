import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoriteService } from '../favorite.service';
import { GlobalrecommendationsService } from '../globalrecommendations.service';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {

  constructor(public favSerObj: FavoriteService, public routerObj: Router,public recommendServObj:GlobalrecommendationsService) { }

  book;
  ngOnInit(): void {
    this.favSerObj.getview().subscribe({
      next: (res) => {
        this.book = res
      },
      error: (err) => {

      }
    })
  }


  addFavorites(v) {
    this.favSerObj.addFavorites(v).subscribe({
      next: (res) => {
        if (res.message == "user not existed.. login to access cart") {
          alert("login please")
          this.routerObj.navigateByUrl('/login')
        }
        else if (res.message == "add added to cart") {
          alert("already added to favourites")
        }
        else if ("next add is added to cart") {
          alert("added to favourites")
        }
        else if ("already existed in cart") {
          alert("already existed in favourites")
        }
      }
    })
  }

  addToRecommendations(v) {
    this.favSerObj.addFavorites(v).subscribe({
      next: (res) => {
        if (res.message == "user not existed.. login to access cart") {
          alert("login to proceed")
          this.routerObj.navigateByUrl('/login')
        }
        else {
          this.recommendServObj.addrecomendations(v).subscribe({
            next:(res)=>{
              console.log("added to global recomendations");
            }
          })
        }
      }
    })
  }


}
