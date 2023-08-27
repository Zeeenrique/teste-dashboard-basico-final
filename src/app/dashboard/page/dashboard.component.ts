import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { DadosFilmeDTO } from 'src/app/models/dados-filme.dto';
import { FilmesService } from 'src/app/services/filmes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{ 
}
