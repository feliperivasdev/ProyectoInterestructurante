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

  constructor(
    private us: ConsumoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.us.getConsumo().subscribe({
      next: (data) => {
        this.consumo = data;
        console.log(data);
      },
      error: (err) => {
        console.error('Error al obtener los datos de consumo:', err);
      }
    });
  }

  nuevoConsumo(): void {
    this.router.navigate(['create-consumo']);
  }

  editarConsumo(id: string): void {
    console.log(`Navigating to edit-consumo/${id}`);
    this.router.navigate(['edit-consumo', id]);
  }

  eliminarConsumo(id: string) {
    this.router.navigate(['delete-consumo/' + id]);
  }

  confirmaEliminarConsumo(id: string) {
    const confirm = window.confirm('¿Está seguro de borrar el registro?');
    if (confirm) {
      this.eliminarConsumo(id);
    }
  }
}

