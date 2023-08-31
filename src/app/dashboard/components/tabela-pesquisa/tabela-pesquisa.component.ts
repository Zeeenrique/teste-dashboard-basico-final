import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { take, tap } from 'rxjs';
import { InformacoesFilmeDTO } from 'src/app/models/informacoes-filme.dto';
import { FilmesService } from 'src/app/services/filmes.service';

@Component({
  selector: 'app-tabela-pesquisa',
  templateUrl: './tabela-pesquisa.component.html',
  styleUrls: ['./tabela-pesquisa.component.css'],
})
export class TabelaPesquisaComponent {
  @ViewChild('inputAno') input!: ElementRef<HTMLInputElement>;

  listaFilmesEncontados: Array<InformacoesFilmeDTO> = [];

  constructor(private filmesService: FilmesService) {}

  // Metodo responsavel por adquirir filmes por ano
  adquirirAno(): void {

    if(!this.input.nativeElement.value) {
      this.listaFilmesEncontados = [];

      return;
    }

    this.filmesService
      .adquiriPorAno(this.input.nativeElement.value)
      .pipe(
        tap((retorno) => {
          this.listaFilmesEncontados = retorno;
        }),
        take(1)
      )
      .subscribe();
  }
}
