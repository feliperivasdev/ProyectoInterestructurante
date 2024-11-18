import { Component, OnInit } from '@angular/core';
import { PredictService } from '../services/predict.service';

@Component({
  selector: 'app-predecir-consumo',
  templateUrl: './predecir-consumo.component.html',
  styleUrls: ['./predecir-consumo.component.scss']
})
export class PredecirConsumoComponent implements OnInit {
  date!: string; // Almacena la fecha seleccionada
  resultado: any = null; // Almacena la respuesta del backend

  constructor(public predictService: PredictService) {}

  ngOnInit(): void {}

  predecir(): void {
    if (this.date) {
      // El input 'type="date"' ya retorna el formato 'YYYY-MM-DD'
      this.predictService.predictConsumo(this.date).subscribe(
        (response) => {
          this.resultado = response;
          console.log('Respuesta del backend:', response);
        },
        (error) => {
          console.error('Error al realizar la predicción:', error);
        }
      );
    } else {
      console.warn('No se seleccionó una fecha.');
    }
  }
  
}
