import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalrecommendationsService {

  constructor(public httpObj:HttpClient) { }


//to get recommendations
getrecomendations():Observable<any>{
return this.httpObj.get('http://localhost:5000/global/books')
}


//to add recommendations
addrecomendations(book):Observable<any>{
  return this.httpObj.put("http://localhost:5000/global/addrecommendations",book)
}





}
