import { Component, OnInit } from '@angular/core';
import { ConsumoService } from '../services/consumo.service';

@Component({
  selector: 'app-consumo',
  templateUrl: './consumo.component.html',
  styleUrls: ['./consumo.component.scss']
})
export class ConsumoComponent implements OnInit {

  public consumo: any;

  constructor(
    private ps: ConsumoService
  ) { }

  ngOnInit(): void {
    let pry = this.ps.getConsumo().subscribe(
      {
        next: (data => {
          this.consumo = data;
          console.log(data);
        }),
        error: (err => err)
      }
    );
  }

}
