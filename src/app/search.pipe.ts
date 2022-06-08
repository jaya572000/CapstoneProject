import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(productData:any[],searchTerm:string,): any[] {
    
    if(!productData || !searchTerm){
      return productData
    }
    else{
      return productData.filter(product=>product.title.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1)
    }
  }
}
