import { Component, Input, OnInit } from '@angular/core';
import { take, tap } from 'rxjs';
import { TopGanhadoresDTO } from 'src/app/models/top-ganhores.dto';
import { FilmesService } from 'src/app/services/filmes.service';

@Component({
  selector: 'app-tabela-top-ganhadores',
  templateUrl: './tabela-top-ganhadores.component.html',
  styleUrls: ['./tabela-top-ganhadores.component.css']
})
export class TabelaTopGanhadoresComponent implements OnInit {
  @Input() lista: Array<any> = []

  listaTop3Ganhadores: Array<TopGanhadoresDTO> = []

  constructor(private filmesService: FilmesService) { }

  ngOnInit(): void {
    this.adquirirTopGanhadores();
  }

  // Metodo responsavel por adquirir os top 3 ganhadores
  private adquirirTopGanhadores() {
    this.filmesService.adquiriTopTres().pipe(tap(studios => this.listaTop3Ganhadores = studios.slice(0, 3)), take(1)).subscribe();
  }
}
