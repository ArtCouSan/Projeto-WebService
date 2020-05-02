import { ViagemService } from '../service/viagem.service';
import { ViagemModel } from '../model/viagem.model';

export class ViagemController {
    
    private viagemService: ViagemService

    constructor(viagemService: ViagemService){
        this.viagemService = viagemService;
    }

    listar(){
        return this.viagemService.listar();
    }

    buscar(id: number){
        return this.viagemService.buscar(id);
    }

    salvar(viagem: ViagemModel){
        return this.viagemService.salvar(viagem);
    }

    atualizar(id: number, viagem: ViagemModel){
        return this.viagemService.editar(id, viagem);
    }

    deletar(id: number){
        return this.viagemService.excluir(id);
    }
}