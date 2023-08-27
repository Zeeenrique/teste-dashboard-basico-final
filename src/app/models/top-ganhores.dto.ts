export class TopGanhadoresDTO {
    name: string;
    winCount: number;

    constructor(name: string, winCount: number) {
        this.name = name;
        this.winCount = winCount;
    }
}