import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ElectrodomesticosService } from '../services/electrodomesticos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-electrodomesticos',
  templateUrl: './edit-electrodomesticos.component.html',
  styleUrls: ['./edit-electrodomesticos.component.scss']
})
export class EditElectrodomesticosComponent implements OnInit {

  public electrodomesticos: FormGroup;
  public usuarios: any[] = [];
  id = '';

  constructor(
    private formBuilder: FormBuilder,
    private electrodomesticosService: ElectrodomesticosService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) { 
    this.id = this.activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    
    this.electrodomesticosService.getElectrodomesticosById(this.id).subscribe({
      next: (data => {
        this.electrodomesticos.setValue({
          nombre: data.nombre,
          marca: data.marca,
          modelo: data.modelo,
          potencia_nominal: data.potencia_nominal,
          id_usuario: data.id_usuario,
        });
      }),
      error: (err => console.error(err))
    });

    
    this.electrodomesticos = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      marca: ['', [Validators.required]],
      modelo: ['', [Validators.required]],
      potencia_nominal: ['', [Validators.required]],
      id_usuario: ['', [Validators.required]]
    });

    
  }

  Usuarios(): void {
    this.electrodomesticosService.getUsuarios().subscribe({
      next: data => {
        console.log('Usuarios data: ', data);
        this.usuarios = data;
      },
      error: err => console.error('Error fetching usuarios', err)
    });
  }

  save(): void {
    if (this.electrodomesticos.valid) {
      this.electrodomesticosService.editElectrodomesticos(this.electrodomesticos.value, this.id).subscribe({
        next: response => {
          console.log('Electrodoméstico editado correctamente', response);
          this.router.navigate(['/dashboard/electrodomesticos']);
        },
        error: err => console.error('Error al editar electrodoméstico', err)
      });
    } else {
      console.log('Formulario inválido');
    }
  }
}






