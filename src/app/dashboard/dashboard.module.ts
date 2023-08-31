import { NgModule } from '@angular/core';
import { DashboardComponent } from './page/dashboard.component';
import { DashBoardRoutingModule } from './dashboard-routing.module';
import { TabelaGanhadoresComponent } from './components/tabela-ganhadores/tabela-ganhadores.component';
import { TabelaMaiorMenorComponent } from './components/tabela-maior-menor/tabela-maior-menor.component';
import { TabelaPesquisaComponent } from './components/tabela-pesquisa/tabela-pesquisa.component';
import { TabelaTopGanhadoresComponent } from './components/tabela-top-ganhadores/tabela-top-ganhadores.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  imports: [DashBoardRoutingModule, NzTableModule, CommonModule, NzIconModule],
  declarations: [
    DashboardComponent,
    TabelaTopGanhadoresComponent,
    TabelaPesquisaComponent,
    TabelaMaiorMenorComponent,
    TabelaGanhadoresComponent,
  ],
  exports: [DashboardComponent],
})
export class DashBoardModule {}
