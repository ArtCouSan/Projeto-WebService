import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalComponent } from './local/local.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistroComponent } from './registro/registro.component';
import { UsuarioService } from './service/usuario.service';
import { VeiculoService } from './service/veiculo.service';
import { ViagemService } from './service/viagem.service';
import { UsuarioComponent } from './usuario/usuario.component';
import { VeiculoComponent } from './veiculo/veiculo.component';
import { ViagemComponent } from './viagem/viagem.component';


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
    MaterialModule,
    HttpClientModule,
    NoopAnimationsModule,
  ],
  providers: [UsuarioService, VeiculoService, ViagemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
