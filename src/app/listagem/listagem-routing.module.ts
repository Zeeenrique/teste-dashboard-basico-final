import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListagemComponent } from "./page/listagem.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'prefix',
        component: ListagemComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListagemRoutingModule { }
