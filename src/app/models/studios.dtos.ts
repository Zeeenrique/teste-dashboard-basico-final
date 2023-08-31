import { TopGanhadoresDTO } from './top-ganhores.dto';

export class StudiosDTO {
  studios: Array<TopGanhadoresDTO>;

  constructor(studios: Array<TopGanhadoresDTO>) {
    this.studios = studios;
  }
}
