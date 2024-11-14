import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-usuarios',
  templateUrl: './edit-usuarios.component.html',
  styleUrls: ['./edit-usuarios.component.scss']
})
export class EditUsuariosComponent implements OnInit {

  public usuarios: FormGroup;
  id='';

  constructor(
    private formBuilder: FormBuilder,
    private usuariosService: UsuariosService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {
    this.id = this.activateRoute.snapshot.params['id'];
   }


  ngOnInit(): void {

    this.usuariosService.getUsuariosById(this.id).subscribe({
      next: (data => {
        this.usuarios.setValue({
          nombre: data.nombre,
          apellido: data.apellido,
          cedula: data.cedula,
          email: data.email,
          password: data.password,
          rol: data.rol,
          created_at: data.created_at
        });
      }),
      error: (err => console.error(err))
    });

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
      this.usuariosService.editUsuarios(this.usuarios.value, this.id).subscribe({
        next: response => {
          console.log('Usuario editado correctamente', response);
          this.router.navigate(['/dashboard/usuarios']); 
        },
        error: err => console.error('Error al editar usuario', err)
      });
    } else {
      console.log('Formulario inválido');
    }
  }

}
