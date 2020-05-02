import { BaseService } from '../core/base.service';
import { ViagemModel } from '../model/viagem.model';
import { Injectable } from '@angular/core';

const URL_ENDPOINT = "/viagens";

@Injectable()
export class ViagemService extends BaseService<ViagemModel> {

    getUrlRecurso(): string {
       return URL_ENDPOINT;
    }
    
}