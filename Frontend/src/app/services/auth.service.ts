import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  auth(email: string, password: string): Observable<any> {
    const payload: any = { password };
    if (email) payload.email = email;

    const ruta = [environment.apiUrl, 'auth', 'login'].join('/');
    return this.http.post<any>(ruta, payload).pipe(
      tap(response => {
        console.log('Respuesta del servidor: ', response);
        if (response.token) {
          localStorage.setItem('token', response.token);
          this.setDataUser(response.nombre, response.id, response.rol);
        }
        if (response.nombre && response.id && response.rol) {

        }
      })
    );
  }

  setDataUser(nombre: string, id: string, rol: string): void {
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('id', id);
    localStorage.setItem('rol', rol);
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('nombre');
    localStorage.removeItem('id');
    localStorage.removeItem('rol');
  }
}

