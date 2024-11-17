import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-delete-usuarios',
  templateUrl: './delete-usuarios.component.html',
  styleUrls: ['./delete-usuarios.component.scss']
})
export class DeleteUsuariosComponent implements OnInit {
  is_ok = false;
  is_error = false;
  is_empty = false;
  id: string = '';

  proyecto = {
    id: '',
    nombre: '',
    apellido: '',
    cedula: '',
    email: '',
    password: '',
    rol: '',
    created_at: ''
  };

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private usuariosService: UsuariosService
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    
  }

  eliminarUsuario(): void {
    this.usuariosService.deleteUsuariosReg(this.id).subscribe({
      next: (data) => {
        this.is_ok = true;
        this.router.navigate(['/dashboard/usuarios']); 
      },
      error: (err) => {
        this.is_error = true;
        console.error('Error al eliminar usuario:', err);
      }
    });
  }
}

