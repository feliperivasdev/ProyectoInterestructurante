import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-usuarios',
  templateUrl: './edit-usuarios.component.html',
  styleUrls: ['./edit-usuarios.component.scss']
})
export class EditUsuariosComponent implements OnInit {

  public Usuarios: FormGroup;
  id = '';

  constructor(
    private formBuilder: FormBuilder,
    private usuariosService: UsuariosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];

    
    this.Usuarios = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      cedula: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      rol: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    
    this.usuariosService.getUsuariosById(this.id).subscribe({
      next: (data) => {
        
        this.Usuarios.patchValue({
          nombre: data.nombre,
          apellido: data.apellido,
          cedula: data.cedula,
          email: data.email,
          password: data.password,
          rol: data.rol
        });
      },
      error: (err) => console.error(err)
    });
  }

  save(): void {
    if (this.Usuarios.valid) {
      console.log('Datos que se enviarán:', this.Usuarios.value);
      this.usuariosService.editUsuarios(this.Usuarios.value, this.id).subscribe({
        next: (response) => {
          console.log('Usuario editado correctamente', response); 
          this.router.navigate(['/dashboard/usuarios']);
        },
        error: (err) => console.error('Error al editar usuario', err)
      });
    } else {
      console.log('Formulario inválido');
    }
  }



}

