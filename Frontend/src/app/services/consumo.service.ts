import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ConsumoService {

  constructor(
    protected http: HttpClient
  ) { }

  getConsumo(): Observable<any> {
    let route = [environment.apiUrl, 'consumo'].join('/');
    console.log("This is the route", route);
    //http://localhost:3000/consumo
    return this.http.get(route);
  }

  getConsumoById(id: any): Observable<any> {
    let ruta = [environment.apiUrl, 'consumo', id].join('/');
    //http://localhost:3000/consumo/:id
    return this.http.get(ruta);
  }

getConsumoByUserId(): Observable<any>{
  const id_usuario = localStorage.getItem('id');
  if(!id_usuario){
    throw new Error('No se a iniciado la sesión')
  }
  const ruta = [environment.apiUrl, 'consumo','usuarios', id_usuario].join('/');
  return this.http.get(ruta).pipe(
    catchError((error) => {
      console.error('Error al obtener los cultivos:', error);
      return throwError('Ocurrió un error al obtener los cultivos.');  
    })
  );
}

  getElectrodomesticos(): Observable<any> {
    let route = [environment.apiUrl, 'electrodomesticos'].join('/');
    return this.http.get(route);
  }

  addConsumo(usr: any): Observable<any> {
    let ruta = [environment.apiUrl, 'consumo'].join('/');
    //http://localhost:3000/consumo
    return this.http.post(ruta, usr);
  }

  editConsumo(usr: any, id: any): Observable<any> {
    let ruta = [environment.apiUrl, 'consumo', id].join('/');
    //http://localhost:3000/consumo/:id
    return this.http.put(ruta, usr);
  }

  deleteConsumoReg(id: any): Observable<any> {
    let ruta = [environment.apiUrl, 'consumo', id].join('/');
    //http://localhost:3000/consumo/:id
    return this.http.delete(ruta);
  }


}

