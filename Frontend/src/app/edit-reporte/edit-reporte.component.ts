import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReporteService } from '../services/reporte.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-reporte',
  templateUrl: './edit-reporte.component.html',
  styleUrls: ['./edit-reporte.component.scss']
})
export class EditReporteComponent implements OnInit {

  
  public reporte: FormGroup;
  public usuarios: any[] = [];
  id='';

  constructor(
    private formBuilder: FormBuilder,
    private reporteService: ReporteService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) { 
    this.id = this.activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.reporteService.getReporteById(this.id).subscribe({
      next: (data => {
        this.reporte.setValue({
          periodo_inicio: data.periodo_inicio,
          periodo_fin: data.periodo_fin,
          consumo_total: data.consumo_total,
          consumo_maximo: data.consumo_maximo,
          id_usuario: data.id_usuario,
        });
      }),
      error: (err => console.error(err))
    });

    this.reporte = this.formBuilder.group({
      periodo_inicio: ['', [Validators.required]],
      periodo_fin: ['', [Validators.required]],
      consumo_total: ['', [Validators.required]],
      consumo_maximo: ['', [Validators.required]],
      id_usuario: ['', [Validators.required]]
    });
    this.Usuarios();
  }

  Usuarios(): void {
    this.reporteService.getUsuarios().subscribe({
      next: data => {
        console.log('Usuarios data: ', data);
        this.usuarios = data;
      },
      error: err => console.error('Error fetching usuarios', err)
    });
  }

  save(): void {
    if (this.reporte.valid) {
      this.reporteService.editReporte(this.reporte.value, this.id).subscribe({
        next: response => {
          console.log('Reporte editado correctamente', response);
          this.router.navigate(['/dashboard/reporte']); 
        },
        error: err => console.error('Error al editar reporte', err)
      });
    } else {
      console.log('Formulario inválido');
    }
  }

}
