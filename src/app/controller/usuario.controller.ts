import { UsuarioModel } from '../model/usuario.model';
import { UsuarioService } from '../service/usuario.service';

export class UsuarioController {
    
    private usuarioService: UsuarioService

    constructor(usuarioService: UsuarioService){
        this.usuarioService = usuarioService;
    }

    listar(){
        return this.usuarioService.listar();
    }

    buscar(id: number){
        return this.usuarioService.buscar(id);
    }

    salvar(usuario: UsuarioModel){
        return this.usuarioService.salvar(usuario);
    }

    atualizar(id: number, usuario: UsuarioModel){
        return this.usuarioService.editar(id, usuario);
    }

    deletar(id: number){
        return this.usuarioService.excluir(id);
    }
}