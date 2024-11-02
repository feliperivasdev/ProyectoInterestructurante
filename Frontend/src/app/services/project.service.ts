import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    protected http: HttpClient
  ) { }

  getProjects(): Observable<any> {
    let route = [environment.apiUrl, 'project'].join('/');
    console.log("This is the route", route);
    //http://localhost:3000/project
    return this.http.get(route);
  }

  getProjectById(id: any): Observable<any> {
    let ruta = [environment.apiUrl, 'project', id].join('/');
    //http://localhost:3000/project/:id
    return this.http.get(ruta);
  }

  addProject(usr: any): Observable<any> {
    let ruta = [environment.apiUrl, 'project'].join('/');
    //http://localhost:3000/project
    return this.http.post(ruta, usr);
  }

  editProject(usr: any, id: any): Observable<any> {
    let ruta = [environment.apiUrl, 'project', id].join('/');
    //http://localhost:3000/project/:id
    return this.http.put(ruta, usr);
  }

  deleteProjectReg(id: any): Observable<any> {
    let ruta = [environment.apiUrl, 'project', id].join('/');
    //http://localhost:3000/project/:id
    return this.http.delete(ruta);
  }
}
