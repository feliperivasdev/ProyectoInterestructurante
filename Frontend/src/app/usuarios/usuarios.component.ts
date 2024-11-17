import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  public Usuarios: any;

  constructor(
    private us: UsuariosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let pry = this.us.getUsuarios().subscribe(
      {
        next: (data => {
          this.Usuarios = data;
          console.log(data);
        }),
        error: (err => err)
      }
    );
  }

  nuevoUsuarios(): void {
    this.router.navigate(['dashboard/create-usuarios'])
  }

  editarUsuarios(id: string): void {
    console.log(`Navigating to edit-usuarios/${id}`);
    this.router.navigate(['dashboard/edit-usuarios', id]);
  }

  eliminarUsuarios(id: string) {
    this.router.navigate(['delete-usuarios/' + id])
  }

  confirmaEliminarUsuarios(id: string) {
    const confirm = window.confirm('Esta seguro de borrar el registro?')
    if (confirm) {
      this.eliminarUsuarios(id)
    }
  }

}
