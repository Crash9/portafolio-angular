import { Component, OnInit } from '@angular/core';
import { PageInfoService } from '../../services/page-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public servicio: PageInfoService, private router: Router) {}

  ngOnInit() {
  }
  searchProduct(word: string) {
    if (word.length < 1) {
      return;
    }
    this.router.navigate(['/search', word]);
  }

}
