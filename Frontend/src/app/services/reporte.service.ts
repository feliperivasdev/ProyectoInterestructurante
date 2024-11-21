import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  constructor(
    protected http: HttpClient
  ) { }

  getReporte(): Observable<any> {
    let route = [environment.apiUrl, 'reporte'].join('/');
    console.log("This is the route", route);
    //http://localhost:3000/reporte
    return this.http.get(route);
  }

  getReporteById(id: any): Observable<any> {
    let ruta = [environment.apiUrl, 'reporte', id].join('/');
    //http://localhost:3000/reporte/:id
    return this.http.get(ruta);
  }

  getReporteByUserId():Observable<any>{
    const id_usuario = localStorage.getItem('id');
    if(!id_usuario){
      throw new Error('No se a iniciado la sesión')
    }
    const ruta = [environment.apiUrl, 'reporte','usuarios', id_usuario].join('/');
    return this.http.get(ruta).pipe(
      catchError((error) => {
        console.error('Error al obtener los cultivos:', error);
        return throwError('Ocurrió un error al obtener los cultivos.');  
      })
    );
  }

  getUsuarios(): Observable<any> {
    let route = [environment.apiUrl, 'usuarios'].join('/');
    return this.http.get(route);
  }

  addReporte(usr: any): Observable<any> {
    let ruta = [environment.apiUrl, 'reporte'].join('/');
    //http://localhost:3000/reporte
    return this.http.post(ruta, usr);
  }

  editReporte(usr: any, id: any): Observable<any> {
    let ruta = [environment.apiUrl, 'reporte', id].join('/');
    //http://localhost:3000/reporte/:id
    return this.http.put(ruta, usr);
  }

  deleteReporteReg(id: any): Observable<any> {
    let ruta = [environment.apiUrl, 'reporte', id].join('/');
    //http://localhost:3000/reporte/:id
    return this.http.delete(ruta);
  }
}
