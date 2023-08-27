import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabelaPesquisaComponent } from './tabela-pesquisa.component';
import { FilmesService } from 'src/app/services/filmes.service';


describe('TabelaPesquisaComponent', () => {
  let component: TabelaPesquisaComponent;
  let fixture: ComponentFixture<TabelaPesquisaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaPesquisaComponent],
      providers: [{
        provide: FilmesService,
        useValue: jasmine.createSpyObj('FilmesService', ['adquiriPorAno'])
     }]
    });
    fixture = TestBed.createComponent(TabelaPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
