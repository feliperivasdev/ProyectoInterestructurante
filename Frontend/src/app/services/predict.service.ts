import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PredictService {

  constructor(protected http: HttpClient) {}

  predictConsumo(date: string): Observable<any> {
    const ruta = [environment.apiUrl, 'consumo', 'predict'].join('/');
    // Envía la fecha como 'tiempo_prediccion'
    return this.http.post(ruta, { tiempo_prediccion: date });
  }
}
