import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViagemComponent } from './viagem/viagem.component';
import { LocalComponent } from './local/local.component';
import { VeiculoComponent } from './veiculo/veiculo.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioService } from './service/usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioController } from './controller/usuario.controller';
import { VeiculoService } from './service/veiculo.service';
import { VeiculoController } from './controller/veiculo.controller';
import { ViagemService } from './service/viagem.service';
import { ViagemController } from './controller/viagem.controller';

@NgModule({
  declarations: [
    AppComponent,
    ViagemComponent,
    LocalComponent,
    VeiculoComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [UsuarioService, UsuarioController, VeiculoService, VeiculoController, ViagemService, ViagemController],
  bootstrap: [AppComponent]
})
export class AppModule { }
