import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../favorite.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  constructor(public favSerObj:FavoriteService) { }

  data;
  ngOnInit(): void {
    this.favSerObj.getFavorites().subscribe({
      next:(res)=>{
        this.data = res.payload.property
        console.log(this.data);
        
      },
      error:(err)=>{
        alert(err)
      }
    })
  }

}
