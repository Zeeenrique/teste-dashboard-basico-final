import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaMaiorMenorComponent } from './tabela-maior-menor.component';
import { FilmesService } from 'src/app/services/filmes.service';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { DashBoardRoutingModule } from '../../dashboard-routing.module';
import { of } from 'rxjs';
import { ProdutoresMaiorMenorDTO } from 'src/app/models/produtores-maior-menor.dto';
import { MaiorMenorDTO } from 'src/app/models/maior-menor.dto';

describe('TabelaMaiorMenorComponent', () => {
  let component: TabelaMaiorMenorComponent;
  let fixture: ComponentFixture<TabelaMaiorMenorComponent>;
  let mockToolBarService: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaMaiorMenorComponent],
      imports: [
        DashBoardRoutingModule,
        NzTableModule,
        CommonModule,
        NzIconModule,
      ],
      providers: [
        {
          provide: FilmesService,
          useValue: jasmine.createSpyObj('FilmesService', [
            'adquiriMaiorMenorIntervaloFilmes',
          ]),
        },
      ],
    });

    mockToolBarService = TestBed.get(FilmesService);
    mockToolBarService.adquiriMaiorMenorIntervaloFilmes.and.returnValue(
      of(new ProdutoresMaiorMenorDTO([], []))
    );

    fixture = TestBed.createComponent(TabelaMaiorMenorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Componente criado', () => {
    expect(component).toBeTruthy();
  });

  it('Nenhum encontrado', () => {
    expect(component.listaMaiorTempoSemGanhar).toEqual([]);
    expect(component.listaMenorTempoSemGanhar).toEqual([]);
  });

  it('Dados encontrados', () => {
    expect(component.listaMaiorTempoSemGanhar).toEqual([]);
    expect(component.listaMenorTempoSemGanhar).toEqual([]);

    const produtoresMaiorMenorDTO = new ProdutoresMaiorMenorDTO(
      [new MaiorMenorDTO('Teste 1', 1, 2018, 2019)],
      [new MaiorMenorDTO('Teste 2', 2, 2018, 2020)]
    );

    mockToolBarService.adquiriMaiorMenorIntervaloFilmes.and.returnValue(
      of(produtoresMaiorMenorDTO)
    );

    component.ngOnInit();

    fixture.detectChanges();

    expect(component.listaMaiorTempoSemGanhar).toEqual(
      produtoresMaiorMenorDTO.max
    );
    expect(component.listaMenorTempoSemGanhar).toEqual(
      produtoresMaiorMenorDTO.min
    );
  });
});
