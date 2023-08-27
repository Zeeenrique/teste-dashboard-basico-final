import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaMaiorMenorComponent } from './tabela-maior-menor.component';
import { FilmesService } from 'src/app/services/filmes.service';

describe('TabelaMaiorMenorComponent', () => {
  let component: TabelaMaiorMenorComponent;
  let fixture: ComponentFixture<TabelaMaiorMenorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaMaiorMenorComponent],
      providers: [{
        provide: FilmesService,
        useValue: jasmine.createSpyObj('FilmesService', ['adquiriMaiorMenorIntervaloFilmes'])
     }]
    });
    fixture = TestBed.createComponent(TabelaMaiorMenorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
