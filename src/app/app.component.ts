import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'teste-dashboard-basico';

  dashBoardFocado = true;

  listFocado = false;

  constructor(private router: Router) {}

  // Todo
  // Futuramente implementar um helper para controle e validação de rotas
  ngOnInit(): void {
    setTimeout(() => {
      if (this.router.url.includes('dashboard')) {
        this.dashBoardFocado = true;
        this.listFocado = false;

        return;
      }

      this.dashBoardFocado = false;
      this.listFocado = true;
    }, 100);
  }

  navegar(rota: string) {
    if (rota === 'dashboard') {
      this.dashBoardFocado = true;
      this.listFocado = false;
    } else {
      this.dashBoardFocado = false;
      this.listFocado = true;
    }

    this.router.navigate([`/${rota}`]);
  }
}
