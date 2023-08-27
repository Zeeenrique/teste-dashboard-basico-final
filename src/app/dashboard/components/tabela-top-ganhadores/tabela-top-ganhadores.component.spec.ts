import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabelaTopGanhadoresComponent } from './tabela-top-ganhadores.component';
import { FilmesService } from 'src/app/services/filmes.service';


describe('TabelaTopGanhadoresComponent', () => {
  let component: TabelaTopGanhadoresComponent;
  let fixture: ComponentFixture<TabelaTopGanhadoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaTopGanhadoresComponent],
      providers: [{
        provide: FilmesService,
        useValue: jasmine.createSpyObj('FilmesService', ['adquiriTopTres'])
     }]
    });
    fixture = TestBed.createComponent(TabelaTopGanhadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
