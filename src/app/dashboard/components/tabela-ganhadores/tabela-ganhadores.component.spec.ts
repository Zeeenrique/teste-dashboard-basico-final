import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaGanhadoresComponent } from './tabela-ganhadores.component';
import { FilmesService } from 'src/app/services/filmes.service';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { DashBoardRoutingModule } from '../../dashboard-routing.module';
import { of } from 'rxjs';
import { GanhadoresDTO } from 'src/app/models/ganhadores.dto';

describe('TabelaGanhadoresComponent', () => {
  let component: TabelaGanhadoresComponent;
  let fixture: ComponentFixture<TabelaGanhadoresComponent>;
  let mockToolBarService: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaGanhadoresComponent],
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
            'adquirirAnoFilmeComMaisVencedores',
          ]),
        },
      ],
    });

    mockToolBarService = TestBed.get(FilmesService);
    mockToolBarService.adquirirAnoFilmeComMaisVencedores.and.returnValue(
      of([])
    );

    fixture = TestBed.createComponent(TabelaGanhadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Criado component', () => {
    expect(component).toBeTruthy();
  });

  it('Sem ganhadores', () => {
    expect(component.listaGanhadores).toEqual([]);
  });

  it('Ganhadores informados', () => {
    expect(component.listaGanhadores).toEqual([]);

    const danhadoresDTO1 = new GanhadoresDTO(1980, 3);
    const danhadoresDTO2 = new GanhadoresDTO(1981, 5);

    const lista = [danhadoresDTO1, danhadoresDTO2];

    mockToolBarService.adquirirAnoFilmeComMaisVencedores.and.returnValue(
      of(lista)
    );

    component.ngOnInit();

    fixture.detectChanges();

    expect(component.listaGanhadores).toEqual(lista);
  });
});
