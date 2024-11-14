import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsumoService } from '../services/consumo.service';

@Component({
  selector: 'app-delete-consumo',
  templateUrl: './delete-consumo.component.html',
  styleUrls: ['./delete-consumo.component.scss']
})
export class DeleteConsumoComponent implements OnInit {
  is_ok = false;
  is_error = false;
  is_empty = false;
  id: '';


  consumo = {
    id: '',
    tiempo_consumo: '',
    consumo_energia: '',
    id_electrodomestico: ''
  };

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private consumoService: ConsumoService
  ) {
    this.id = activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    let consumo = this.consumoService.deleteConsumoReg(this.id).subscribe({
      next: (data => {
        this.consumo = data;
        this.router.navigate(['/dashboard/consumo']);
      }),
      error: (err => err)
    })
  }

}
