import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaGanhadoresComponent } from './tabela-ganhadores.component';
import { FilmesService } from 'src/app/services/filmes.service';

describe('TabelaGanhadoresComponent', () => {
  let component: TabelaGanhadoresComponent;
  let fixture: ComponentFixture<TabelaGanhadoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaGanhadoresComponent],
      providers: [{
        provide: FilmesService,
        useValue: jasmine.createSpyObj('FilmesService', ['adquirirAnoFilmeComMaisVencedores'])
     }]
    });
    fixture = TestBed.createComponent(TabelaGanhadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
