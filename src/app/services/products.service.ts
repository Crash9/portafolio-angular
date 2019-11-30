import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [];
  loading = true;

  constructor( private http: HttpClient ) {
    this.loadProducts();
  }
  private loadProducts() {
    this.http.get('https://angular-html-6c9f8.firebaseio.com/productos_idx.json')
      .subscribe(( resp: any[] ) => {
        this.products = resp;
        console.log(resp);
        this.loading = false;
      });
  }
}
