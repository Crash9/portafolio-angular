import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';
import { reject } from 'q';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [];
  loading = true;
  filteredProducts: Product[] = [];

  constructor( private http: HttpClient ) {
    this.loadProducts();
  }

  private loadProducts() {
    return new Promise( (resolve, reject) => {
      this.http.get('https://angular-html-6c9f8.firebaseio.com/productos_idx.json')
        .subscribe(( resp: any[] ) => {
          this.products = resp;
          this.loading = false;
          resolve();
      });
    });
  }

  getProduct(id: string ) {
    return this.http.get(`https://angular-html-6c9f8.firebaseio.com/productos/${ id }.json`);
  }

  searchProduct( word: string) {

    if (this.products.length === 0) {
      // cargar productos
      this.loadProducts().then( () => {
        // ejecutar despues de tener los productos y aplicar el filtro
        this.filterProducts(word);
      });
    } else {
      // aplicar el filtro
      this.filterProducts(word);
    }
  }

  private filterProducts( word: string) {
    this.filteredProducts = [];
    word = word.toLowerCase();
    this.products.forEach( prod => {
      const titleLower = prod.titulo.toLowerCase();
      if (prod.categoria.indexOf(word) >= 0 || titleLower.indexOf(word) >= 0) {
        this.filteredProducts.push(prod);
      }
    });
  }
}
