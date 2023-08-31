import { GanhadoresDTO } from './ganhadores.dto';

export class AnosDTO {
  years: Array<GanhadoresDTO>;

  constructor(years: Array<GanhadoresDTO>) {
    this.years = years;
  }
}
