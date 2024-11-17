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
  id: '';

  proyecto = {
    id: '',
    nombre: '',
    apellido: '',
    cedula: '',
    email: '',
    password:'',
    rol:'',
    created_at:''

  };
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private usuariosService: UsuariosService
  ) {
    this.id = activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    let usuarios = this.usuariosService.deleteUsuariosReg(this.id).subscribe({
      next: (data => {
        this.proyecto = data;
        this.router.navigate(['/dashboard/usuarios']); 
      }),
      error: (err => err)
    })
  }

}
