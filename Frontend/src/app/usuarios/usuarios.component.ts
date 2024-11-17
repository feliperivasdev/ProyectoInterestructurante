import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  public Usuarios: any[] = [];

  constructor(
    private usuariosService: UsuariosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.usuariosService.getUsuarios().subscribe({
      next: (data) => {
        this.Usuarios = data;
        console.log(data);
      },
      error: (err) => console.error(err)
    });
  }

  nuevoUsuarios(): void {
    this.router.navigate(['dashboard/create-usuarios']);
  }

  editarUsuarios(id: string): void {
    this.router.navigate([`dashboard/edit-usuarios/${id}`]);
  }

  confirmaEliminarUsuarios(id: string): void {
    const confirm = window.confirm('¿Está seguro de borrar el registro?');
    if (confirm) {
      this.eliminarUsuarios(id);
    }
  }

  eliminarUsuarios(id: string): void {
    this.usuariosService.deleteUsuariosReg(id).subscribe({
      next: (response) => {
        console.log('Usuario eliminado correctamente', response);
        // Volver a cargar la lista de usuarios después de la eliminación
        this.ngOnInit();
      },
      error: (err) => console.error('Error al eliminar usuario', err)
    });
  }

}

