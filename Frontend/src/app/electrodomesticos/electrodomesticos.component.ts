import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElectrodomesticosService } from '../services/electrodomesticos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-electrodomesticos',
  templateUrl: './electrodomesticos.component.html',
  styleUrls: ['./electrodomesticos.component.scss']
})
export class ElectrodomesticosComponent implements OnInit {

  public electrodomesticos: any;

  constructor(
    private es: ElectrodomesticosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cargarElectrodomestico();
  }

  cargarElectrodomestico():void{
    const rol = localStorage.getItem('rol');
    let electrodomesticosObservable : Observable<any>;
    if (rol === 'admin') {
      electrodomesticosObservable = this.es.getElectrodomesticos();
    } else if (rol === 'usuario') {
      electrodomesticosObservable = this.es.getElectrodomesticosByUserId();
    }else{
      console.error('Rol no encontrado')
      return;
    }

    electrodomesticosObservable.subscribe({
      next: (data) => {
        this.electrodomesticos = data;
        console.log(data);
      },
      error: (err) => console.error('Error al cargar los electrodomesticos',err)
    })
    
  }

  nuevoElectrodomestico(): void {
    this.router.navigate(['dashboard/create-electrodomesticos']);
  }

  editarElectrodomestico(id: string): void {
    console.log(`Navigating to edit-electrodomesticos/${id}`);
    this.router.navigate(['dashboard/edit-electrodomesticos', id]);
  }

  confirmaEliminarElectrodomestico(id: string) {
    const confirm = window.confirm('¿Está seguro de borrar el registro?');
    if (confirm) {
      this.eliminarElectrodomestico(id);
    }
  }

  eliminarElectrodomestico(id: string) {
    this.router.navigate(['dashboard/delete-electrodomesticos/' + id]);
  }
}



