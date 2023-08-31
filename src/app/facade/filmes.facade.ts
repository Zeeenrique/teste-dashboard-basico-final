import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnosDTO } from '../models/anos.dto';
import { StudiosDTO } from '../models/studios.dtos';
import { ProdutoresMaiorMenorDTO } from '../models/produtores-maior-menor.dto';
import { InformacoesFilmeDTO } from '../models/informacoes-filme.dto';
import { FilmesDTO } from '../models/filmes.dto';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FilmesFacade {
  constructor(private http: HttpClient) {}

  adquirirProAno(ano: string) {
    return this.http.get<Array<InformacoesFilmeDTO>>(
      `https://tools.texoit.com/backend-java/api/movies?winner=true&year=${ano}`
    );
  }

  adquirirAnosComMaisVencedores() {
    return this.http.get<AnosDTO>(
      'https://tools.texoit.com/backend-java/api/movies?projection=years-with-multiple-winners'
    );
  }

  adquirirTopTres() {
    return this.http.get<StudiosDTO>(
      'https://tools.texoit.com/backend-java/api/movies?projection=studios-with-win-count'
    );
  }

  adquiriMaiorMenorIntervaloFilmes() {
    return this.http.get<ProdutoresMaiorMenorDTO>(
      'https://tools.texoit.com/backend-java/api/movies?projection=max-min-win-interval-for-producers'
    );
  }

  adquirirFilmesPorListagem(
    ano: string,
    vencedor: string,
    pagina: number,
    index: number
  ) {
    if (!!ano) {
      if (vencedor === 'Yes/No') {
        return this.http.get<FilmesDTO>(
          `https://tools.texoit.com/backend-java/api/movies?page=${pagina}&size=${index}&year=${ano}`
        );
      }

      const winner = vencedor === 'Yes' ? true : false;

      return this.http.get<FilmesDTO>(
        `https://tools.texoit.com/backend-java/api/movies?page=${pagina}&size=${index}&winner=${winner}&year=${ano}`
      );
    }

    return this.validarParametroWinner(vencedor, pagina, index);
  }

  private validarParametroWinner(
    vencedor: string,
    pagina: number,
    index: number
  ): Observable<FilmesDTO> {
    if (vencedor === 'Yes/No') {
      return this.http.get<FilmesDTO>(
        `https://tools.texoit.com/backend-java/api/movies?page=${pagina}&size=${index}`
      );
    }

    const winner = vencedor === 'Yes' ? true : false;

    return this.http.get<FilmesDTO>(
      `https://tools.texoit.com/backend-java/api/movies?page=${pagina}&size=${index}&winner=${winner}`
    );
  }
}
