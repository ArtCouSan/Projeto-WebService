import { VeiculoService } from '../service/veiculo.service';
import { VeiculoModel } from '../model/veiculo.model';
import { Injectable } from '@angular/core';

@Injectable()
export class VeiculoController {
    
    private veiculoService: VeiculoService

    constructor(veiculoService: VeiculoService){
        this.veiculoService = veiculoService;
    }

    listar(){
        return this.veiculoService.listar().subscribe(resultado => {
            console.log("resultado: "+resultado)
            alert("Consulta realizada com sucesso!");
          },
          erro => {
            if(erro.status == 404) {
              console.log('Serviço não localizado.');
            }
          });
    }

    buscar(id: number){
        return this.veiculoService.buscar(id).subscribe(resultado => {
            console.log("resultado: "+resultado)
            alert("Busca realizada com sucesso!");
          },
          erro => {
            if(erro.status == 404) {
              console.log('Serviço não localizado.');
            }
          });
    }

    salvar(veiculo: VeiculoModel){
        return this.veiculoService.salvar(veiculo).subscribe(resultado => {
            console.log("resultado: "+resultado)
            alert("Adicionado com sucesso!");
          },
          erro => {
            if(erro.status == 404) {
              console.log('Serviço não localizado.');
            }
          });
    }

    atualizar(id: number, veiculo: VeiculoModel){
        return this.veiculoService.editar(id, veiculo).subscribe(resultado => {
            console.log("resultado: "+resultado)
            alert("Atualização realizada com sucesso!");
          },
          erro => {
            if(erro.status == 404) {
              console.log('Serviço não localizado.');
            }
          });
    }

    deletar(id: number){
        return this.veiculoService.excluir(id).subscribe(resultado => {
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