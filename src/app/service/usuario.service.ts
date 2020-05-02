import { UsuarioModel } from '../model/usuario.model';
import { Injectable } from '@angular/core';
import { BaseService } from '../core/base.service';

const URL_ENDPOINT = '/usuarios';

@Injectable()
export class UsuarioService extends BaseService<UsuarioModel> {

    getUrlRecurso(): string {
        return URL_ENDPOINT;
    }
    
}