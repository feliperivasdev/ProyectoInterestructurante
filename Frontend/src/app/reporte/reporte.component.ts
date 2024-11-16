import { Component, OnInit } from '@angular/core';
import { ReporteService } from '../services/reporte.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.scss']
})
export class ReporteComponent implements OnInit {

  public reporte: any;

  constructor(
    private us: ReporteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let pry = this.us.getReporte().subscribe(
      {
        next: (data => {
          this.reporte = data;
          console.log(data);
        }),
        error: (err => err)
      }
    );
  }

  nuevoReporte(): void {
    this.router.navigate(['create-reporte'])
  }

  editarReporte(id: string): void {
    console.log('Navigating to edit-reporte/${id}');
    this.router.navigate(['edit-reporte', id]);
  }

  eliminarReporte(id: string) {
    this.router.navigate(['delete-reporte/' + id])
  }

  confirmaEliminarReporte(id: string) {
    const confirm = window.confirm('Esta seguro de borrar el registro?')
    if (confirm) {
      this.eliminarReporte(id)
    }
  }

}
