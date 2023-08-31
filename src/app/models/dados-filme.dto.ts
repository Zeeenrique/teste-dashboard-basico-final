export class DadosFilmeDTO {
  id: number;
  year: number;
  title: string;
  winner: boolean;

  constructor(id: number, year: number, title: string, winner: boolean) {
    this.id = id;
    this.year = year;
    this.title = title;
    this.winner = winner;
  }
}
