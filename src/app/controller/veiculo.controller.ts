import { VeiculoService } from '../service/veiculo.service';
import { VeiculoModel } from '../model/veiculo.model';

export class VeiculoController {
    
    private veiculoService: VeiculoService

    constructor(veiculoService: VeiculoService){
        this.veiculoService = veiculoService;
    }

    listar(){
        return this.veiculoService.listar();
    }

    buscar(id: number){
        return this.veiculoService.buscar(id);
    }

    salvar(veiculo: VeiculoModel){
        return this.veiculoService.salvar(veiculo);
    }

    atualizar(id: number, veiculo: VeiculoModel){
        return this.veiculoService.editar(id, veiculo);
    }

    deletar(id: number){
        return this.veiculoService.excluir(id);
    }
}