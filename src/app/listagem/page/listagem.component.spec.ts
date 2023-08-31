import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FilmesService } from 'src/app/services/filmes.service';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ListagemRoutingModule } from '../listagem-routing.module';
import { ListagemComponent } from './listagem.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DadosFilmeDTO } from 'src/app/models/dados-filme.dto';
import { FilmesDTO } from 'src/app/models/filmes.dto';

describe('DashboardComponent', () => {
  let component: ListagemComponent;
  let fixture: ComponentFixture<ListagemComponent>;
  let mockToolBarService: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListagemComponent],
      imports: [
        NzTableModule,
        CommonModule,
        ListagemRoutingModule,
        NzSelectModule,
        FormsModule,
        BrowserAnimationsModule,
      ],
      providers: [
        {
          provide: FilmesService,
          useValue: jasmine.createSpyObj('FilmesService', [
            'adquirirFilmesPorListagem',
          ]),
        },
      ],
    });

    mockToolBarService = TestBed.get(FilmesService);
    mockToolBarService.adquirirFilmesPorListagem.and.returnValue(of([]));

    fixture = TestBed.createComponent(ListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Componente criado', () => {
    expect(component).toBeTruthy();
  });

  it('Lista vazia', () => {
    expect(component.filmes).toEqual([]);
  });

  it('Lista com dados', () => {
    const dadosFilme = new DadosFilmeDTO(1, 2018, 'Teste', true);

    const filmes = new FilmesDTO([dadosFilme], 1);

    mockToolBarService.adquirirFilmesPorListagem.and.returnValue(of(filmes));

    fixture.detectChanges();

    component.alterouGanhadores('');

    expect(component.filmes).toEqual([dadosFilme]);
  });

  it('Filtrando dados por ano', () => {
    expect(component.filmes).toEqual([]);

    const dadosFilme = new DadosFilmeDTO(1, 2019, 'Teste', true);

    const filmes = new FilmesDTO([dadosFilme], 1);

    mockToolBarService.adquirirFilmesPorListagem.and.returnValue(of(filmes));

    fixture.detectChanges();

    component.input.nativeElement.value = '2019';

    component.filtrarPorAno();

    expect(component.filmes).toEqual([dadosFilme]);
  });

  it('Filtrando dados por ano apagando input', () => {
    expect(component.filmes).toEqual([]);

    const dadosFilme = new DadosFilmeDTO(1, 2018, 'Teste', true);

    const filmes = new FilmesDTO([dadosFilme], 1);

    mockToolBarService.adquirirFilmesPorListagem.and.returnValue(of(filmes));

    fixture.detectChanges();

    component.input.nativeElement.value = '';

    component.filtrarPorAno();

    expect(component.filmes).toEqual([dadosFilme]);
  });

  it('Filtrando dados por ganhador', () => {
    expect(component.filmes).toEqual([]);

    const dadosFilme = new DadosFilmeDTO(1, 2018, 'Teste', true);

    const filmes = new FilmesDTO([dadosFilme], 1);

    mockToolBarService.adquirirFilmesPorListagem.and.returnValue(of(filmes));

    fixture.detectChanges();

    component.alterouGanhadores('Yes');

    expect(component.filmes).toEqual([dadosFilme]);
  });

  it('Filtrando dados por ganhador false', () => {
    expect(component.filmes).toEqual([]);

    let dadosFilme = new DadosFilmeDTO(1, 2018, 'Teste', true);

    let filmes = new FilmesDTO([dadosFilme], 1);

    mockToolBarService.adquirirFilmesPorListagem.and.returnValue(of(filmes));

    component.alterouGanhadores('Yes');

    expect(component.filmes).toEqual([dadosFilme]);

    dadosFilme = new DadosFilmeDTO(1, 2018, 'Teste', false);

    filmes = new FilmesDTO([dadosFilme], 1);

    mockToolBarService.adquirirFilmesPorListagem.and.returnValue(of(filmes));

    fixture.detectChanges();

    component.alterouGanhadores('No');

    expect(component.filmes).toEqual([dadosFilme]);
  });
});
