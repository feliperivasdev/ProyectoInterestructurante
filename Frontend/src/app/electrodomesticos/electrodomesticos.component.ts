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
    private us: ElectrodomesticosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let pry = this.us.getElectrodomesticos().subscribe(
      {
        next: (data => {
          this.electrodomesticos = data;
          console.log(data);
        }),
        error: (err => err)
      }
    );
  }

  nuevoelEctrodomesticos(): void {
    this.router.navigate(['create-electrodomesticos'])
  }

  editarElectrodomesticos(id: string): void {
    console.log('Navigating to edit-electrodomesticos/${id}');
    this.router.navigate(['edit-electrodomesticos', id]);
  }

  eliminarElectrodomesticos(id: string) {
    this.router.navigate(['delete-electrodomesticos/' + id])
  }

  confirmaEliminarElectrodomesticos(id: string) {
    const confirm = window.confirm('Esta seguro de borrar el registro?')
    if (confirm) {
      this.eliminarElectrodomesticos(id)
    }
  }

}
