import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { TabelaTopGanhadoresComponent } from '../components/tabela-top-ganhadores/tabela-top-ganhadores.component';
import { TabelaPesquisaComponent } from '../components/tabela-pesquisa/tabela-pesquisa.component';
import { TabelaMaiorMenorComponent } from '../components/tabela-maior-menor/tabela-maior-menor.component';
import { TabelaGanhadoresComponent } from '../components/tabela-ganhadores/tabela-ganhadores.component';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { DashBoardRoutingModule } from '../dashboard-routing.module';
import { FilmesService } from 'src/app/services/filmes.service';
import { of } from 'rxjs';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let mockToolBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        TabelaTopGanhadoresComponent,
        TabelaPesquisaComponent,
        TabelaMaiorMenorComponent,
        TabelaGanhadoresComponent,
      ],
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
            'adquirirTopTres',
            'adquirirAnoFilmeComMaisVencedores',
            'adquiriMaiorMenorIntervaloFilmes',
            'adquiriPorAno',
          ]),
        },
      ],
    });

    mockToolBarService = TestBed.get(FilmesService);
    mockToolBarService.adquirirTopTres.and.returnValue(of([]));
    mockToolBarService.adquirirAnoFilmeComMaisVencedores.and.returnValue(
      of([])
    );
    mockToolBarService.adquiriMaiorMenorIntervaloFilmes.and.returnValue(of([]));
    mockToolBarService.adquiriPorAno.and.returnValue(of([]));

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Component criado', () => {
    expect(component).toBeTruthy();
  });
});
