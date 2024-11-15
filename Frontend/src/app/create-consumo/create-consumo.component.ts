import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-create-consumo",
  templateUrl: "./create-consumo.component.html",
  styleUrls: ["./create-consumo.component.css"],
})
export class CreateConsumoComponent {
  consumoForm: FormGroup;

  constructor() {
    this.consumoForm = new FormGroup({
      nombre: new FormControl("", Validators.required),
      marca: new FormControl("", Validators.required),
      modelo: new FormControl("", Validators.required),
      potencia_nominal: new FormControl("", [
        Validators.required,
        Validators.pattern("^[0-9]*$"), // Asegura que sea solo numérico
      ]),
    });
  }

  onSubmit() {
    if (this.consumoForm.valid) {
      console.log("Formulario de consumo enviado:", this.consumoForm.value);
      // Aquí podrías enviar los datos a una API o servicio.
    } else {
      console.log("Formulario no válido");
    }
  }
}
