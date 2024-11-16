import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ConsumoService } from "../services/consumo.service"; // Importa el servicio de Consumo
import { Router } from "@angular/router";


@Component({
  selector: "app-create-consumo",
  templateUrl: "./create-consumo.component.html",
  styleUrls: ["./create-consumo.component.scss"],
})
export class CreateConsumoComponent implements OnInit {
  public consumo: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private consumoService: ConsumoService,
    private router:Router
  ) {
    
  }

  ngOnInit(): void {this.consumo = this.formBuilder.group({
    tiempo_consumo: ['', [Validators.required]],
    consumo_energia: ['', [Validators.required]],
    id_electrodomestico: ['', [Validators.required]],
  });}

save(): void {
  if (this.consumo.valid) {
    this.consumoService.addConsumo(this.consumo.value).subscribe(
      response => {
        console.log('consumo saved successfully', response);
      },
      error => {
        console.error('Error saving consumo', error);
      }
    );
  } else {
    console.log('Form is invalid');
  }
  
}
}
