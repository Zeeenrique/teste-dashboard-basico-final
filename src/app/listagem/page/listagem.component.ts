import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { tap } from 'rxjs';
import { DadosFilmeDTO } from 'src/app/models/dados-filme.dto';
import { FilmesService } from 'src/app/services/filmes.service';

@Component({
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css'],
})
export class ListagemComponent {
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;

  filmes: Array<DadosFilmeDTO> = [];

  winner = 'Yes/No';

  loading = true;

  pageSize = 15;

  total = 1;

  pageIndex = 0;

  opcoes = ['Yes', 'No', 'Yes/No'];

  constructor(private filmesService: FilmesService) {}

  // Metodo de filtragem por ano, o mesmo so fara a requisação quando o tamanho do ano for maior que 3
  filtrarPorAno(): void {
    const valorInput = this.input.nativeElement.value;

    if (valorInput.length > 2) {
      this.adquirirDados(valorInput, this.winner);

      return;
    }

    if (valorInput === '') {
      this.adquirirDados();
    }
  }

  // Metodo responsavel por adquirir dados ao alterar filtro de ganhadores
  alterouGanhadores(event: string): void {
    this.winner = event;

    this.adquirirDados(this.input.nativeElement.value, this.winner);
  }

  // Metodo responsavel por ouvir o clique na mudança de pagina na tabela
  onQueryParamsChange(params: NzTableQueryParams): void {
    this.loading = true;

    let { pageSize, pageIndex } = params;

    if (pageIndex > 0) {
      pageIndex = pageIndex - 1;
    }

    this.adquirirDados(
      this.input.nativeElement.value,
      this.winner,
      pageIndex,
      pageSize
    );
  }

  tratarDado(winner: boolean) {
    return winner ? 'Yes' : 'No';
  }

  /**
   * Metodo resposavel por adquirir filmes utilizando listagem, sendo passado por parametro
   * @param ano parametro opcional
   * @param vencedor parametro opcional com default true
   * @param pagina parametro contendo numero da pagina
   * @param index  paramentro contendo o numero maximo de itens que sera exibido em tela por pagina
   */
  private adquirirDados(
    ano: string = '',
    vencedor: string = 'Yes/No',
    pagina: number = 0,
    index: number = 15
  ): void {
    this.filmesService
      .adquirirFilmesPorListagem(ano, vencedor, pagina, index)
      .pipe(
        tap((lista) => {
          if (lista?.content?.length) {
            this.filmes = lista.content;
            this.total = lista.totalElements;
          }

          this.loading = false;
        })
      )
      .subscribe();
  }
}
