import { Component, OnInit } from '@angular/core';
import { ElectrodomesticosService } from '../services/electrodomesticos.service';

@Component({
  selector: 'app-electrodomesticos',
  templateUrl: './electrodomesticos.component.html',
  styleUrls: ['./electrodomesticos.component.scss']
})
export class ElectrodomesticosComponent implements OnInit {

  public electrodomesticos: any;

  constructor(
    private ps: ElectrodomesticosService
  ) { }

  ngOnInit(): void {
    let pry = this.ps.getElectrodomesticos().subscribe(
      {
        next: (data => {
          this.electrodomesticos = data;
          console.log(data);
        }),
        error: (err => err)
      }
    );
  }

}
