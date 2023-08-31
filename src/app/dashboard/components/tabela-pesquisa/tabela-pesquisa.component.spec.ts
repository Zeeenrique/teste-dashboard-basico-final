import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabelaPesquisaComponent } from './tabela-pesquisa.component';
import { FilmesService } from 'src/app/services/filmes.service';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { DashBoardRoutingModule } from '../../dashboard-routing.module';
import { of } from 'rxjs';
import { InformacoesFilmeDTO } from 'src/app/models/informacoes-filme.dto';

describe('TabelaPesquisaComponent', () => {
  let component: TabelaPesquisaComponent;
  let fixture: ComponentFixture<TabelaPesquisaComponent>;
  let mockToolBarService: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaPesquisaComponent],
      imports: [
        DashBoardRoutingModule,
        NzTableModule,
        CommonModule,
        NzIconModule,
      ],
      providers: [
        {
          provide: FilmesService,
          useValue: jasmine.createSpyObj('FilmesService', ['adquiriPorAno']),
        },
      ],
    });

    mockToolBarService = TestBed.get(FilmesService);
    mockToolBarService.adquiriPorAno.and.returnValue(of([]));

    fixture = TestBed.createComponent(TabelaPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Criação do componente', () => {
    expect(component).toBeTruthy();
  });

  it('Sem informar ano', () => {
    expect(component.listaFilmesEncontados).toEqual([]);
  });

  it('Com ano informado', () => {
    expect(component.listaFilmesEncontados).toEqual([]);

    const informacoesFilmeDTO = new InformacoesFilmeDTO(1, 2018, 'Filme 2018');
    const informacoesFilmeDTO2 = new InformacoesFilmeDTO(
      1,
      2018,
      'Filme 2018 2'
    );

    const lista = [informacoesFilmeDTO, informacoesFilmeDTO2];

    component.input.nativeElement.value = '2018';

    mockToolBarService.adquiriPorAno.and.returnValue(of(lista));

    component.adquirirAno();

    fixture.detectChanges();

    expect(component.listaFilmesEncontados).toEqual(lista);
  });
});
