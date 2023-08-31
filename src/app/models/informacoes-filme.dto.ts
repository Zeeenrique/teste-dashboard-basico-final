export class InformacoesFilmeDTO {
  id: number;
  year: number;
  title: string;

  constructor(id: number, year: number, title: string) {
    this.id = id;
    this.year = year;
    this.title = title;
  }
}
