import { DadosFilmeDTO } from './dados-filme.dto';

export class FilmesDTO {
  content: Array<DadosFilmeDTO> = [];
  totalElements: number;

  constructor(content: Array<DadosFilmeDTO> = [], totalElements: number) {
    this.content = content;
    this.totalElements = totalElements;
  }
}
