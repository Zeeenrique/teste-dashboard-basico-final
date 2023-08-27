import { MaiorMenorDTO } from "./maior-menor.dto";

export class ProdutoresMaiorMenorDTO {
    min: Array<MaiorMenorDTO>;
    max: Array<MaiorMenorDTO>;

    constructor(min: Array<MaiorMenorDTO>,
        max: Array<MaiorMenorDTO>) {
        this.min = min;
        this.max = max;
    }
}