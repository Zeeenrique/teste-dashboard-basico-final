import { Component, Input, OnInit } from '@angular/core';
import { take, tap } from 'rxjs';
import { GanhadoresDTO } from 'src/app/models/ganhadores.dto';
import { FilmesService } from 'src/app/services/filmes.service';

@Component({
  selector: 'app-tabela-ganhadores',
  templateUrl: './tabela-ganhadores.component.html',
  styleUrls: ['./tabela-ganhadores.component.css'],
})
export class TabelaGanhadoresComponent implements OnInit {
  listaGanhadores: Array<GanhadoresDTO> = [];

  constructor(private filmesService: FilmesService) {}

  ngOnInit(): void {
    this.adquirirAnoFilmeComMaisVencedores();
  }

  // Metodo reponsavel por adquirir o ano com mais ganhadores
  private adquirirAnoFilmeComMaisVencedores(): void {
    this.filmesService
      .adquirirAnoFilmeComMaisVencedores()
      .pipe(
        tap((filmes) => (this.listaGanhadores = filmes)),
        take(1)
      )
      .subscribe();
  }
}
