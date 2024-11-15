import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ConsumoService } from "../services/consumo.service"; // Importa el servicio de Consumo

@Component({
  selector: "app-create-consumo",
  templateUrl: "./create-consumo.component.html",
  styleUrls: ["./create-consumo.component.scss"],
})
export class CreateConsumoComponent implements OnInit {
  consumoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private consumoService: ConsumoService // Inyecta el servicio
  ) {
    this.consumoForm = this.fb.group({
      nombre: ["", Validators.required],
      marca: ["", Validators.required],
      modelo: ["", Validators.required],
      potenciaNominal: [
        "",
        [Validators.required, Validators.pattern("^[0-9]+$")],
      ],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.consumoForm.valid) {
      const consumoData = this.consumoForm.value; // Obtén los datos del formulario

      // Llama al servicio para enviar los datos al backend
      this.consumoService.addConsumo(consumoData).subscribe({
        next: (response) => {
          console.log("Consumo creado exitosamente:", response);
          // Aquí puedes redirigir o mostrar un mensaje de éxito
        },
        error: (err) => {
          console.error("Error al crear consumo:", err);
          // Muestra un mensaje de error si la solicitud falla
        },
      });
    }
  }
}
