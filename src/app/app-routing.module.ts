import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocalComponent } from "./local/local.component";
import { UsuarioComponent } from "./usuario/usuario.component";
import { VeiculoComponent } from "./veiculo/veiculo.component";
import { ViagemComponent } from "./viagem/viagem.component";


const routes: Routes = [
  {path: "local", component: LocalComponent },
  {path: "usuario", component: UsuarioComponent },
  {path: "veiculo", component: VeiculoComponent },
  {path: "viagem", component: ViagemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
