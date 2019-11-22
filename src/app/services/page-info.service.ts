import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/page-info.interface';

@Injectable({
  providedIn: 'root'
})
export class PageInfoService {
  info: InfoPagina = {};
  charged = false;
  constructor( private http: HttpClient ){
    console.log('Page service ready');
    // Leer el archivo JSON
    this.http.get('assets/data/data-page.json')
      .subscribe( resp => {
        this.charged = true;
        this.info = resp;
        console.log(resp);
      });
  }
}
