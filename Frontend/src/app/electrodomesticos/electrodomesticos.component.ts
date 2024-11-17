import { Component, OnInit } from '@angular/core';
import { ElectrodomesticosService } from '../services/electrodomesticos.service';
import { Router } from '@angular/router';

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
    let pry = this.es.getElectrodomesticos().subscribe(
      {
        next: (data => {
          this.electrodomesticos = data;
          console.log(data);
        }),
        error: (err => err)
      }
    );
  }

  nuevoElectrodomestico(): void {
    this.router.navigate(['dashboard/create-electrodomesticos'])
  }

  editarElectrodomestico(id: string): void {
    console.log(`Navigating to edit-electrodomesticos/${id}`);
    this.router.navigate(['edit-electrodomesticos', id]);
  }

  eliminarElectrodomestico(id: string) {
    this.router.navigate(['delete-electrodomesticos/' + id])
  }

  confirmaEliminarElectrodomestico(id: string) {
    const confirm = window.confirm('Esta seguro de borrar el registro?')
    if (confirm) {
      this.eliminarElectrodomestico(id)
    }
  }

}
