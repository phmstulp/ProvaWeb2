import { Injectable } from '@angular/core';
import { BaseService } from '../shared/base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vacina } from './vacina/model/vacina';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VacinaService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  save(vacina: any) : Observable<any>{
    console.log(vacina)
    //Primeiro Parâmetro === URL
    //Segundo Parâmetro === BODY - Corpo da Requisição
    return this.http.post(environment.urlWebAPI + "Vacinas/", vacina)
      .catch((error: any) => Observable.throw(error.error));
  }

  update(vacina: any) : Observable<any>{
    console.log(vacina)
    //Primeiro Parâmetro === URL
    //Segundo Parâmetro === BODY - Corpo da Requisição
    return this.http.put(environment.urlWebAPI + "Vacinas/"+vacina.idVacina,
     vacina).catch((error: any) => Observable.throw(error.error));
  }

  listAll() : Observable<any>{
    return this.http.get(environment.urlWebAPI + "Vacinas/")
      .catch((error: any) => Observable.throw(error.error));
  }

  remove(id: number) : Observable<any>{
    return this.http.delete(environment.urlWebAPI + "Vacinas/"+id)
      .catch((error: any) => Observable.throw(error.error));
  }

  getById(id: number) : Observable<any>{
    return this.http.get(environment.urlWebAPI + "Vacinas/"+id)
      .catch((error: any) => Observable.throw(error.error));
  }
}
