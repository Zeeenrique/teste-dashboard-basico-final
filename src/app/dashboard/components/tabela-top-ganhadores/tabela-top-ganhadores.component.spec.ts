import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabelaTopGanhadoresComponent } from './tabela-top-ganhadores.component';
import { FilmesService } from 'src/app/services/filmes.service';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { DashBoardRoutingModule } from '../../dashboard-routing.module';
import { of } from 'rxjs';
import { TopGanhadoresDTO } from 'src/app/models/top-ganhores.dto';


describe('TabelaTopGanhadoresComponent', () => {
  let component: TabelaTopGanhadoresComponent;
  let fixture: ComponentFixture<TabelaTopGanhadoresComponent>;
  let mockToolBarService: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaTopGanhadoresComponent],
      imports: [
        DashBoardRoutingModule, NzTableModule, CommonModule, NzIconModule
      ],
      providers: [{
        provide: FilmesService,
        useValue: jasmine.createSpyObj('FilmesService',['adquirirTopTres'])
      }]
    });

    mockToolBarService = TestBed.get(FilmesService);
    mockToolBarService.adquirirTopTres.and.returnValue(of([]))

    fixture = TestBed.createComponent(TabelaTopGanhadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Componente criado', () => {
    expect(component).toBeTruthy();
  });

  it('Top ganhadores', () => {
    expect(component.listaTop3Ganhadores).toEqual([]);

    const ganhador1 = new TopGanhadoresDTO('Ganhador 1', 2);
    const ganhador2 = new TopGanhadoresDTO('Ganhador 2', 2);
    const ganhador3 = new TopGanhadoresDTO('Ganhador 3', 2);
    const ganhador4 = new TopGanhadoresDTO('Ganhador 4', 1);

    const lista = [ganhador1, ganhador2, ganhador3, ganhador4];

    mockToolBarService.adquirirTopTres.and.returnValue(of(lista));

    component.ngOnInit();

    fixture.detectChanges();

    expect(component.listaTop3Ganhadores).toEqual(lista.slice(0, 3));
  });
});
