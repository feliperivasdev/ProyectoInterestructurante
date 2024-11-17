import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../services/usuarios.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-usuarios',
  templateUrl: './create-usuarios.component.html',
  styleUrls: ['./create-usuarios.component.scss']
})
export class CreateUsuariosComponent implements OnInit {

  public usuarios: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuariosService: UsuariosService,
    private router: Router

  ) { }

  ngOnInit(): void {

    this.usuarios = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      cedula: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      rol: ['', [Validators.required]]
    });
  }


  save(): void {
    console.log('Formulario enviado', this.usuarios.value);
    if (this.usuarios.valid) {
      this.usuariosService.addUsuarios(this.usuarios.value).subscribe(
        response => {
          console.log('Usuario guardado', response);
          this.router.navigate(['/dashboard/usuarios']);
        },
        error => {
          console.error('Error al guardar el usuario', error);
        }
      );
    } else {
      console.log('Formulario inválido');
    }
  }
}

















