import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { tap } from 'rxjs';
import { DadosFilmeDTO } from 'src/app/models/dados-filme.dto';
import { FilmesService } from 'src/app/services/filmes.service';

@Component({
    templateUrl: './listagem.component.html',
    styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {
    @ViewChild('input') input!: ElementRef<HTMLInputElement>;

    filmes: Array<DadosFilmeDTO> = [];

    vencedor = false;

    loading = true;

    pageSize = 10;
    
    total = 1;

    pageIndex = 1;

    opcoes = [
        { label: 'Sim', value: 'true' },
        { label: 'Nao', value: 'false' }
    ];

    constructor(private filmesService: FilmesService) { }

    ngOnInit(): void {
        this.adquirirDados();
    }

    // Metodo de filtragem por ano, o mesmo so fara a requisação quando o tamanho do ano for maior que 3
    filtrarPorAno() {
        const valorInput = this.input.nativeElement.value

        if (valorInput.length > 2) {

            this.adquirirDados(valorInput);

            return;
        }

        if (valorInput === '') {
            this.adquirirDados();
        }
    }

    // Metodo responsavel por adquirir dados ao alterar filtro de ganhadores
    alterouGanhadores(event: boolean) {
        this.vencedor = event;

        this.adquirirDados(this.input.nativeElement.value, this.vencedor)
    }


    // Metodo responsavel por ouvir o clique na mudança de pagina na tabela
    onQueryParamsChange(params: NzTableQueryParams) {

        this.loading = true;

        const { pageSize, pageIndex } = params;

        this.adquirirDados(this.input.nativeElement.value, this.vencedor, pageIndex, pageSize)
    }

    /**
     * Metodo resposavel por adquirir filmes utilizando listagem, sendo passado por parametro
     * @param ano parametro opcional
     * @param vencedor parametro opcional com default true
     * @param pagina parametro contendo numero da pagina
     * @param index  paramentro contendo o numero maximo de itens que sera exibido em tela por pagina
     */
    private adquirirDados(ano: string = '', vencedor = true, pagina: number = 0, index: number = 10) {
        this.filmesService.adquirirFilmesPorListagem(ano, vencedor, pagina, index).pipe(tap((lista) => {
          
            if(lista.content.length) {
                this.filmes = lista.content;
                this.total = lista.totalElements; 
            }

            this.loading = false;
        })).subscribe();
    }
}
