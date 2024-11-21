import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PredictService {

  constructor(protected http: HttpClient) { }

  predictConsumo(date: string): Observable<any> {
    const ruta = [environment.apiUrl, 'consumo', 'predict'].join('/');
    // Envía la fecha como 'tiempo_prediccion'
    return this.http.post(ruta, { tiempo_prediccion: date });
  }

  predictConsumoByUserId(date: string, id_usuario: string): Observable<any> {
    id_usuario = localStorage.getItem('id');
    if (!id_usuario) {
      throw new Error('id de usuario no encontrado');
    }

    const ruta = [environment.apiUrl, 'consumo', 'predict', 'usuarios', id_usuario].join('/');
    return this.http.post(ruta, { tiempo_prediccion: date, id_usuario })
  }
}
