import { Component, OnInit } from '@angular/core';
import { ReporteService } from '../services/reporte.service';
import { ConsumoService } from '../services/consumo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.scss']
})
export class ReporteComponent implements OnInit {

  public reporte: any = {};
  public fechaInicio: string;
  public fechaFin: string;
  public consumoTotal: number = 0;
  public consumoMaximo: number = 0;
  public id_usuario = localStorage.getItem('id');


  constructor(
    private consumoService: ConsumoService,
    private reporteService : ReporteService,
    private us: ReporteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarReporte();
    this.fechaInicio = '';
    this.fechaFin = '';
    this.id_usuario ;
    



  }

  cargarReporte(): void {
    const rol = localStorage.getItem('rol');
    let reporteObservable : any;

    if(rol === 'admin') {
      reporteObservable = this.reporteService.getReporte();
    } else if(rol === 'usuario') {
      reporteObservable = this.reporteService.getReporteByUserId();
    }else{
      console.error('Rol de usuario no es correcto');
      return;
    }

    reporteObservable.subscribe({
      next: (data) => {
        this.reporte = data;
        console.log(data);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  generarReporte(): void {
    if (!this.fechaInicio || !this.fechaFin ) {
      alert("Por favor, selecciona el rango de fechas.");
      return;
    }

    // Llamamos al servicio para obtener los datos filtrados por las fechas
    this.consumoService.getConsumoByUserId().subscribe(
      (data) => {
        console.log("Datos de consumo obtenidos:", data);

        // Calcular el periodo de inicio y fin
        const fechas = data.map((item: any) => new Date(item.tiempo_consumo));
        const fechaInicio = new Date(Math.min(...fechas));
        const fechaFin = new Date(Math.max(...fechas));

        // Calcular consumo total
        const consumoTotal = data.reduce((total: number, item: any) => total + item.consumo_energia, 0);

        // Calcular consumo máximo
        const consumoMaximo = Math.max(...data.map((item: any) => item.consumo_energia));

        // Asignar los valores calculados
        this.reporte = {
          periodo_inicio: fechaInicio.toISOString().split('T')[0], // Formato YYYY-MM-DD
          periodo_fin: fechaFin.toISOString().split('T')[0], // Formato YYYY-MM-DD
          consumo_total: consumoTotal.toFixed(2), // Limitar a dos decimales
          consumo_maximo: consumoMaximo.toFixed(2),// Limitar a dos decimales
          id_usuario: localStorage.getItem('id') 
        };

        // Aquí puedes guardar el reporte en la base de datos si es necesario
        this.us.addReporte(this.reporte).subscribe(
          (saveResponse) => {
            console.log("Reporte guardado en la base de datos: ", saveResponse);
          },
          (error) => {
            console.error("Error al guardar el reporte", error);
          }
        );
      },
      (error) => {
        console.error("Error al generar el reporte", error);
      }
    );
  }

  nuevoReporte(): void {
    this.router.navigate(['create-reporte']);
  }

  editarReporte(id: string): void {
    this.router.navigate(['edit-reporte', id]);
  }

  eliminarReporte(id: string): void {
    this.router.navigate(['dashboard/delete-reporte', id]);
  }

  confirmaEliminarReporte(id: string): void {
    const confirm = window.confirm('¿Está seguro de borrar el registro?');
    if (confirm) {
      this.eliminarReporte(id);
    }
  }
}
