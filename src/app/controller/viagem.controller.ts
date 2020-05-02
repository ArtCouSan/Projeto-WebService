import { ViagemService } from '../service/viagem.service';
import { ViagemModel } from '../model/viagem.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ViagemController {
    
    private viagemService: ViagemService

    constructor(viagemService: ViagemService){
        this.viagemService = viagemService;
    }

    listar(){
        return this.viagemService.listar().subscribe(resultado => {
            console.log("resultado: "+resultado)
            alert("Consulta realizada com sucesso!");
          },
          erro => {
            if(erro.status == 404) {
              console.log('Serviço não localizado.');
            }
          });;
    }

    buscar(id: number){
        return this.viagemService.buscar(id).subscribe(resultado => {
            console.log("resultado: "+resultado)
            alert("Busca realizada com sucesso!");
          },
          erro => {
            if(erro.status == 404) {
              console.log('Serviço não localizado.');
            }
          });;
    }

    salvar(viagem: ViagemModel){
        return this.viagemService.salvar(viagem).subscribe(resultado => {
            console.log("resultado: "+resultado)
            alert("Adicionado com sucesso!");
          },
          erro => {
            if(erro.status == 404) {
              console.log('Serviço não localizado.');
            }
          });;
    }

    atualizar(id: number, viagem: ViagemModel){
        return this.viagemService.editar(id, viagem).subscribe(resultado => {
            console.log("resultado: "+resultado)
            alert("Atualização realizada com sucesso!");
          },
          erro => {
            if(erro.status == 404) {
              console.log('Serviço não localizado.');
            }
          });;
    }

    deletar(id: number){
        return this.viagemService.excluir(id).subscribe(resultado => {
            console.log("resultado: "+resultado)
            alert("Deletado com sucesso!");
          },
          erro => {
            if(erro.status == 404) {
              console.log('Serviço não localizado.');
            }
          });;
    }
}