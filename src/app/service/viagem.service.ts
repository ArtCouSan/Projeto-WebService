import { BaseService } from '../core/base.service';
import { ViagemModel } from '../model/viagem.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ViagemDisponibilidadeDTO } from '../model/viagem-disponibildade.dto';

const URL_ENDPOINT = "https://back-webcar-fiap.herokuapp.com/trip";

@Injectable()
export class ViagemService extends BaseService<ViagemModel> {


  confirmar(viagem: ViagemModel): Observable<ViagemModel> {
    return this.http.post<ViagemModel>(this.getUrlRecurso() + "/confirm", viagem);
  }

  consultarDisponibilidade(viagem: ViagemDisponibilidadeDTO): Observable<ViagemDisponibilidadeDTO> {
    return this.http.post<ViagemDisponibilidadeDTO>(this.getUrlRecurso() + "/disponibility-consult", viagem);
  }

  getUrlRecurso(): string {
    return URL_ENDPOINT;
  }

}