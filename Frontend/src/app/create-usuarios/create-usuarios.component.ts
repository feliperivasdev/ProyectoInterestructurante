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
      rol: ['', [Validators.required]],
      created_at: ['', [Validators.required]]
  });
  }
 
  save(): void {
    if (this.usuarios.valid) {
      this.usuariosService.addUsuarios(this.usuarios.value).subscribe(
        response => {
          console.log('usuarios saved successfully', response);
          // Maneja la respuesta aquí (por ejemplo, mostrando una notificación al usuario)
        },
        error => {
          console.error('Error saving usuarios', error);
          // Maneja el error aquí (por ejemplo, mostrando un mensaje de error al usuario)
        }
      );
    } else {
      console.log('Form is invalid');
    }
    
  }
  
}
