import { Injectable } from "@angular/core";
import { FilmesFacade } from "../facade/filmes.facade";
import { Observable, filter, map } from "rxjs";
import { DadosFilmeDTO } from "../models/dados-filme.dto";
import { GanhadoresDTO } from "../models/ganhadores.dto";
import { TopGanhadoresDTO } from "../models/top-ganhores.dto";
import { ProdutoresMaiorMenorDTO } from "../models/produtores-maior-menor.dto";
import { FilmesDTO } from "../models/filmes.dto";

@Injectable({ providedIn: 'root' })
export class FilmesService {

    constructor(private filmesFacade: FilmesFacade) { }

    adquirirAnoFilmeComMaisVencedores(): Observable<Array<GanhadoresDTO>> {
        return this.filmesFacade.adquirirAnosComMaisVencedores().pipe(map((anos) =>
            anos.years
        ));

    }

    adquiriTopTres(): Observable<Array<TopGanhadoresDTO>> {
        return this.filmesFacade.adquirirTopTres().pipe(map((studios) => studios.studios));

    }

    adquiriMaiorMenorIntervaloFilmes(): Observable<ProdutoresMaiorMenorDTO> {
        return this.filmesFacade.adquiriMaiorMenorIntervaloFilmes();

    }

    adquiriPorAno(ano: string) {
        return this.filmesFacade.adquirirProAno(ano);

    }

    adquirirFilmesPorListagem(ano:string, vencedor: boolean, pagina: number, index: number): Observable<FilmesDTO> {
        return this.filmesFacade.adquirirFilmesPorListagem(ano, vencedor, pagina, index);
    }
}