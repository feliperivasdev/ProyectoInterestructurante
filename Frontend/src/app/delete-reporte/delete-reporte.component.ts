import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReporteService } from '../services/reporte.service';

@Component({
  selector: 'app-delete-reporte',
  templateUrl: './delete-reporte.component.html',
  styleUrls: ['./delete-reporte.component.scss']
})
export class DeleteReporteComponent implements OnInit {

  is_ok = false;
  is_error = false;
  is_empty = false;
  id: '';


  reporte = {
    id: '',
    periodo_inicio: '',
    periodo_fin: '',
    consumo_total: '',
    consumo_maximo: '',
    id_usuario: ''
  };
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private reporteService: ReporteService
  ) { 
    this.id = activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    let reporte = this.reporteService.deleteReporteReg(this.id).subscribe({
      next: (data => {
        this.reporte = data;
        this.router.navigate(['/dashboard/reporte']); 
      }),
      error: (err => err)
    })
  }


}
