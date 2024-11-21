import { Component, OnInit } from '@angular/core';
import { ConsumoService } from '../services/consumo.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-consumo',
  templateUrl: './consumo.component.html',
  styleUrls: ['./consumo.component.scss']
})
export class ConsumoComponent implements OnInit {
  public consumo: any;
  public notificacion: string | undefined;
  public mostrarPrediccion: boolean = false; 

  constructor(
    private cs: ConsumoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const rol  = localStorage.getItem('rol');
    let consumosObservable : Observable<any>

    if(rol === 'admin') {
      consumosObservable = this.cs.getConsumo();
    } else if(rol === 'usuario') {
      consumosObservable = this.cs.getConsumoByUserId();
    }else{
      console.error('Rol de usuario no es correcto');
    }

    consumosObservable.subscribe({
      next: (data) => {
        this.consumo = data;
        console.log(data);
      },
      error: (err) => {
        console.error('Error al obtener los datos de consumo:', err);
      }
    })
  }

  notificar(): string {
    let notificacion: string = '';
    this.cs.getConsumo().subscribe((ultimoConsumo) => {
      if (ultimoConsumo.valor > 40.0) {
        notificacion = `⚠️ ¡Atención! El consumo registrado es alto: ${ultimoConsumo.valor} unidades.`;
      } else {
        notificacion = `✅ El consumo es normal: ${ultimoConsumo.valor} unidades.`;
      }
      console.log(notificacion);
    });
    return notificacion;
  }

  predecir(): void {
    this.mostrarPrediccion = !this.mostrarPrediccion; // Alterna la visibilidad
  }

  eliminarConsumo(id: string) {
    this.router.navigate(['dashboard/delete-consumo/' + id]);
  }

  confirmaEliminarConsumo(id: string) {
    const confirm = window.confirm('¿Está seguro de borrar el registro?');
    if (confirm) {
      this.eliminarConsumo(id);
    }
  }
}
