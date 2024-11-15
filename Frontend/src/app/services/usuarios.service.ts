import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    protected http: HttpClient
  ) { }

  getUsuarios(): Observable<any> {
    let route = [environment.apiUrl, 'usuarios'].join('/');
    console.log("This is the route", route);
    //http://localhost:3000/usuarios
    return this.http.get(route);
  }

  getUsuariosById(id: any): Observable<any> {
    let ruta = [environment.apiUrl, 'usuarios', id].join('/');
    //http://localhost:3000/usuarios/:id
    return this.http.get(ruta);
  }

  addUsuarios(usr: any): Observable<any> {
    let ruta = [environment.apiUrl, 'usuarios'].join('/');
    //http://localhost:3000/usuarios
    return this.http.post(ruta, usr);
  }

  editUsuarios(usr: any, id: any): Observable<any> {
    let ruta = [environment.apiUrl, 'usuarios', id].join('/');
    //http://localhost:3000/usuarios/:id
    return this.http.put(ruta, usr);
  }

  deleteUsuariosReg(id: any): Observable<any> {
    let ruta = [environment.apiUrl, 'usuarios', id].join('/');
    //http://localhost:3000/usuarios/:id
    return this.http.delete(ruta);
  }
}

