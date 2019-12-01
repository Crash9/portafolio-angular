import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interfaces/page-info.interface';

@Injectable({
  providedIn: 'root'
})
export class PageInfoService {
  info: InfoPage = {};
  team: any[] = [];
  constructor( private http: HttpClient ) {
    this.loadInfo();
    this.loadTeam();
  }
  private loadInfo() {
    // Leer el archivo JSON
    this.http.get('assets/data/data-page.json')
      .subscribe( (resp: InfoPage) => {
        this.info = resp;
      });
  }
  private loadTeam() {
    this.http.get('https://angular-html-6c9f8.firebaseio.com/equipo.json')
      .subscribe( (resp: any[]) => {
        this.team = resp;
      });
  }
}
