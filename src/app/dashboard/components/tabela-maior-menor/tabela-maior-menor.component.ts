import { Component, Input, OnInit } from '@angular/core';
import { take, tap } from 'rxjs';
import { MaiorMenorDTO } from 'src/app/models/maior-menor.dto';
import { ProdutoresMaiorMenorDTO } from 'src/app/models/produtores-maior-menor.dto';
import { FilmesService } from 'src/app/services/filmes.service';

@Component({
  selector: 'app-tabela-maior-menor',
  templateUrl: './tabela-maior-menor.component.html',
  styleUrls: ['./tabela-maior-menor.component.css']
})
export class TabelaMaiorMenorComponent implements OnInit {
  @Input() lista: Array<any> = []

  listaMaiorTempoSemGanhar: Array<MaiorMenorDTO> = []

  listaMenorTempoSemGanhar: Array<MaiorMenorDTO> = []

  constructor(private filmesService: FilmesService){}

  ngOnInit(): void {
    this.adquiriMaiorMenorIntervaloFilmes();
  }

  // Metodo responsavel por adquirir informações sobre o minimo e o maximo
  private adquiriMaiorMenorIntervaloFilmes() {
    this.filmesService.adquiriMaiorMenorIntervaloFilmes().pipe(tap((filmes => {
      this.listaMaiorTempoSemGanhar = filmes.max;
      this.listaMenorTempoSemGanhar = filmes.min;
    })),take(1)).subscribe();
  }
}
