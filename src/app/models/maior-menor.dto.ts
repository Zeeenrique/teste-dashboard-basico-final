export class MaiorMenorDTO {
  producer: string;
  interval: number;
  previousWin: number;
  followingWin: number;

  constructor(
    producer: string,
    interval: number,
    previousWin: number,
    followingWin: number
  ) {
    this.producer = producer;
    this.interval = interval;
    this.previousWin = previousWin;
    this.followingWin = followingWin;
  }
}
