import { UsuarioModel } from '../model/usuario.model';
import { UsuarioService } from '../service/usuario.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioController {
    
    private usuarioService: UsuarioService

    constructor(usuarioService: UsuarioService){
        this.usuarioService = usuarioService;
    }

    listar(){
        return this.usuarioService.listar();
    }

    buscar(id: number){
        return this.usuarioService.buscar(id).subscribe(resultado => {
            console.log("resultado: "+resultado)
            alert("Busca realizada com sucesso!");
          },
          erro => {
            if(erro.status == 404) {
              console.log('Serviço não localizado.');
            }
          });
    }

    salvar(usuario: UsuarioModel){
        return this.usuarioService.salvar(usuario).subscribe(resultado => {
            console.log("resultado: "+resultado)
            alert("Adicionado com sucesso!");
          },
          erro => {
            if(erro.status == 404) {
              console.log('Serviço não localizado.');
            }
          });
    }

    atualizar(id: number, usuario: UsuarioModel){
        return this.usuarioService.editar(id, usuario).subscribe(resultado => {
            console.log("resultado: "+resultado)
            alert("Atualizado com sucesso!");
          },
          erro => {
            if(erro.status == 404) {
              console.log('Serviço não localizado.');
            }
          });
    }

    deletar(id: number){
        return this.usuarioService.excluir(id).subscribe(resultado => {
            console.log("resultado: "+resultado)
            alert("Deletado com sucesso!");
          },
          erro => {
            if(erro.status == 404) {
              console.log('Serviço não localizado.');
            }
          });
    }
}