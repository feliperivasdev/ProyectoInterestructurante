import { Component, OnInit } from '@angular/core';
import { ConsumoService } from '../services/consumo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consumo',
  templateUrl: './consumo.component.html',
  styleUrls: ['./consumo.component.scss']
})
export class ConsumoComponent implements OnInit {

  public consumo: any;
  public notificacion

  constructor(
    private cs: ConsumoService,
    private router: Router
    

  ) { }

  ngOnInit(): void {
    this.cs.getConsumo().subscribe({
      next: (data) => {
        this.consumo = data;
        console.log(data);
      },
      error: (err) => {
        console.error('Error al obtener los datos de consumo:', err);
      }
    });
  }

  notificar(): string {
    let notificacion: string = '';
    
    // Obtener el último registro de consumo desde el servicio
    this.cs.getConsumo().subscribe((ultimoConsumo) => {
      if (ultimoConsumo.valor > 40.0) { // Ejemplo: umbral de 100 unidades
        notificacion = `⚠️ ¡Atención! El consumo registrado es alto: ${ultimoConsumo.valor} unidades.`;
      } else {
        notificacion = `✅ El consumo es normal: ${ultimoConsumo.valor} unidades.`;
      }
      
      // Aquí puedes enviar la notificación, guardarla o retornarla
      console.log(notificacion); // Ejemplo de uso
    });
    
    return notificacion;
  }  


  eliminarConsumo(id: string) {
    this.router.navigate(['dashboard/delete-consumo/' + id])
  }

  confirmaEliminarConsumo(id: string) {
    const confirm = window.confirm('Esta seguro de borrar el registro?')
    if (confirm) {
      this.eliminarConsumo(id)
    }
  }
}

