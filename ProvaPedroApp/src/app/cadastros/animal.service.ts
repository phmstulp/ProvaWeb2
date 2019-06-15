import { Injectable } from '@angular/core';
import { BaseService } from '../shared/base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animal } from './vacina/model/animal';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnimalService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  save(animal: any) : Observable<any>{
    console.log(animal)
    //Primeiro Parâmetro === URL
    //Segundo Parâmetro === BODY - Corpo da Requisição
    return this.http.post(environment.urlWebAPI + "Animals/", animal)
      .catch((error: any) => Observable.throw(error.error));
  }

  update(animal: any) : Observable<any>{
    console.log(animal)
    //Primeiro Parâmetro === URL
    //Segundo Parâmetro === BODY - Corpo da Requisição
    return this.http.put(environment.urlWebAPI + "Animals/"+animal.idAnimal,
     animal).catch((error: any) => Observable.throw(error.error));
  }

  listAll() : Observable<any>{
    return this.http.get(environment.urlWebAPI + "Animals/")
      .catch((error: any) => Observable.throw(error.error));
  }

  remove(id: number) : Observable<any>{
    return this.http.delete(environment.urlWebAPI + "Animals/"+id)
      .catch((error: any) => Observable.throw(error.error));
  }

  getById(id: number) : Observable<any>{
    return this.http.get(environment.urlWebAPI + "Animals/"+id)
      .catch((error: any) => Observable.throw(error.error));
  }
}
