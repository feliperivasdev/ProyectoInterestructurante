import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElectrodomesticosService } from '../services/electrodomesticos.service';

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
    this.es.getElectrodomesticos().subscribe({
      next: (data) => {
        this.electrodomesticos = data;
        console.log(data);
      },
      error: (err) => console.error(err)
    });
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



