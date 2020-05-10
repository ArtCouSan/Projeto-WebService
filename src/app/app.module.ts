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
import { VeiculoService } from './service/veiculo.service';
import { ViagemService } from './service/viagem.service';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    ViagemComponent,
    LocalComponent,
    VeiculoComponent,
    UsuarioComponent,
    NavbarComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [UsuarioService, VeiculoService, ViagemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
