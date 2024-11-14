import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConsumoService } from '../services/consumo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-consumo',
  templateUrl: './edit-consumo.component.html',
  styleUrls: ['./edit-consumo.component.scss']
})
export class EditConsumoComponent implements OnInit {

  public consumo: FormGroup;
  public electrodomesticos: any[] = [];
  id='';

  constructor(
    private formBuilder: FormBuilder,
    private consumoService: ConsumoService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) { 
    this.id = this.activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.consumoService.getConsumoById(this.id).subscribe({
      next: (data => {
        this.consumo.setValue({
          tiempo_consumo: data.tiempo_consumo,
          consumo_energia: data.consumo_energia,
          id_electrodomestico: data.id_electrodomestico
        });
      }),
      error: (err => console.error(err))
    });

    this.consumo = this.formBuilder.group({
      tiempo_consumo: ['', [Validators.required]],
      consumo_energia: ['', [Validators.required]],
      id_electrodomestico: ['', [Validators.required]]
    });
    this.Electrodomesticos();
  }

  Electrodomesticos(): void {
    this.consumoService.getElectrodomesticos().subscribe({
      next: data => {
        console.log('Electrodomesticos data: ', data);
        this.electrodomesticos = data;
      },
      error: err => console.error('Error fetching electrodomesticos', err)
    });
  }

  save(): void {
    if (this.consumo.valid) {
      this.consumoService.editConsumo(this.consumo.value, this.id).subscribe({
        next: response => {
          console.log('Consumo editado correctamente', response);
          this.router.navigate(['/dashboard/consumo']); 
        },
        error: err => console.error('Error al editar consumo', err)
      });
    } else {
      console.log('Formulario inválido');
    }
  }

}
