import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ElectrodomesticosService } from '../services/electrodomesticos.service';

@Component({
  selector: 'app-delete-electrodomesticos',
  templateUrl: './delete-electrodomesticos.component.html',
  styleUrls: ['./delete-electrodomesticos.component.scss']
})
export class DeleteElectrodomesticosComponent implements OnInit {

  is_ok = false;
  is_error = false;
  is_empty = false;
  id: string = '';  
  
  electrodomesticos = {
    id: '',
    nombre: '',
    marca: '',
    modelo: '',
    potencia_nominal: '',
    id_usuario: ''
  };

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private electrodomesticosService: ElectrodomesticosService
  ) { 
    this.id = this.activatedRoute.snapshot.params['id'];  
  }

  ngOnInit(): void {
    
    this.deleteElectrodomestico();
  }

  deleteElectrodomestico(): void {
    this.electrodomesticosService.deleteElectrodomesticosReg(this.id).subscribe({
      next: (data) => {
        this.is_ok = true;  
        console.log('Electrodoméstico eliminado correctamente:', data);
        this.router.navigate(['/dashboard/electrodomesticos']);  
      },
      error: (err) => {
        this.is_error = true;  
        console.error('Error al eliminar electrodoméstico:', err);
      }
    });
  }
}

