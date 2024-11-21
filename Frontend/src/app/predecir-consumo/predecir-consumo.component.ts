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
  role!: string | null; // Almacena el rol del usuario

  constructor(public predictService: PredictService) { }

  ngOnInit(): void {
    // Recupera el rol desde el localStorage
    this.role = localStorage.getItem('rol');
  }

  predecir(): void {
    if (!this.date) {
      console.warn('No se seleccionó una fecha.');
      return;
    }

    const id_usuario = localStorage.getItem('id'); // Recupera el ID del usuario

    if (!id_usuario) {
      console.warn('No se encontró el ID del usuario en el localStorage.');
      return;
    }

    if (this.role === 'admin') {
      // Llama a la función predictConsumo para administradores
      this.predictService.predictConsumo(this.date).subscribe(
        (response) => {
          this.resultado = response;
          console.log('Respuesta del backend (admin):', response);
        },
        (error) => {
          console.error('Error al realizar la predicción como admin:', error);
        }
      );
    } else if (this.role === 'usuario') {
      // Llama a la función predictConsumoByUserId para usuarios
      this.predictService.predictConsumoByUserId(this.date, id_usuario).subscribe(
        (response) => {
          this.resultado = response;
          console.log('Respuesta del backend (usuario):', response);
        },
        (error) => {
          console.error('Error al realizar la predicción como usuario:', error);
        }
      );
    } else {
      console.warn('Rol desconocido o no encontrado en el localStorage.');
    }
  }

}
