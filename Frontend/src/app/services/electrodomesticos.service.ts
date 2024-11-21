import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ElectrodomesticosService {

  constructor(
    protected http: HttpClient
  ) { }

  getElectrodomesticos(): Observable<any> {
    let route = [environment.apiUrl, 'electrodomesticos'].join('/');
    console.log("This is the route", route);
    //http://localhost:3000/electrodomesticos
    return this.http.get(route);
  }

  getElectrodomesticosById(id: any): Observable<any> {
    let ruta = [environment.apiUrl, 'electrodomesticos', id].join('/');
    //http://localhost:3000/electrodomesticos/:id
    return this.http.get(ruta);
  }

  getElectrodomesticosByUserId(): Observable<any> {
    const id_usuario = localStorage.getItem('id');
    if (!id_usuario) {
      throw new Error('id de usuario no encontrado');
    }
    let ruta = [environment.apiUrl, 'electrodomesticos', 'usuarios', id_usuario].join('/');
    return this.http.get(ruta)
  }
  getUsuarios(): Observable<any> {
    let route = [environment.apiUrl, 'usuarios'].join('/');
    return this.http.get(route);
  }

  addElectrodomesticos(usr: any): Observable<any> {
    let ruta = [environment.apiUrl, 'electrodomesticos'].join('/');
    //http://localhost:3000/electrodomesticos
    return this.http.post(ruta, usr);
  }

  editElectrodomesticos(usr: any, id: any): Observable<any> {
    let ruta = [environment.apiUrl, 'electrodomesticos', id].join('/');
    //http://localhost:3000/electrodomesticos/:id
    return this.http.put(ruta, usr);
  }

  deleteElectrodomesticosReg(id: any): Observable<any> {
    let ruta = [environment.apiUrl, 'electrodomesticos', id].join('/');
    //http://localhost:3000/electrodomesticos/:id
    return this.http.delete(ruta);
  }
}
