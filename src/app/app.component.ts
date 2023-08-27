import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teste-dashboard-basico';

  constructor(private router: Router) { }

  navegar(rota: string) {
    this.router.navigate([`/${rota}`])
  }
}
