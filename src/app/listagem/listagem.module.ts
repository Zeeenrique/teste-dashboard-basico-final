import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NzTableModule } from "ng-zorro-antd/table";
import { ListagemRoutingModule } from "./listagem-routing.module";
import { ListagemComponent } from "./page/listagem.component";
import { NzSelectModule } from "ng-zorro-antd/select";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [NzTableModule, CommonModule, ListagemRoutingModule, NzSelectModule, FormsModule ],
    declarations: [ListagemComponent],
    exports: [ListagemComponent]
})
export class ListagemModule {}