import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ElectrodomesticosService } from '../services/electrodomesticos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-electrodomesticos',
  templateUrl: './create-electrodomesticos.component.html',
  styleUrls: ['./create-electrodomesticos.component.scss']
})
export class CreateElectrodomesticosComponent implements OnInit {

  public electrodomesticos: FormGroup;
  public usuarios: any[] = [];
  public id_user: string

  constructor(
    private formBuilder: FormBuilder,
    private electrodomesticosService: ElectrodomesticosService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.id_user = localStorage.getItem('id');
    this.electrodomesticos = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      marca: ['', [Validators.required]],
      modelo: ['', [Validators.required]],
      potencia_nominal: ['', [Validators.required]],
      id_usuario: this.id_user,
      tiempo: ['', [Validators.required]],
      consumo_categoria: ['', [Validators.required]],

    });
    this.Usuarios();
  }

  Usuarios(): void {
    this.electrodomesticosService.getUsuarios().subscribe(
      data => {
        console.log('Electrodomesticos data: ', data);
        this.usuarios = data;
      },
      error => {
        console.error('Error fetching usuarios', error);

      })

  }


  save(): void {
    console.log('Formulario enviado', this.electrodomesticos.value);
    if (this.electrodomesticos.valid) {
      this.electrodomesticosService.addElectrodomesticos(this.electrodomesticos.value).subscribe(
        response => {
          console.log('Electrodomestico guardado', response);
          this.router.navigate(['/dashboard/electrodomesticos']);
        },
        error => {
          console.error('Error al guardar el electrodomestico', error);
        }
      );
    } else {
      console.log('Formulario inválido');
    }
  }
}
