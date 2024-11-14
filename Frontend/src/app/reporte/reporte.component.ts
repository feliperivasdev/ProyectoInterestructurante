import { Component, OnInit } from '@angular/core';
import { ReporteService } from '../services/reporte.service';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.scss']
})
export class ReporteComponent implements OnInit {

  public reporte: any;

  constructor(
    private ps: ReporteService
  ) { }

  ngOnInit(): void {
    let pry = this.ps.getReporte().subscribe(
      {
        next: (data => {
          this.reporte = data;
          console.log(data);
        }),
        error: (err => err)
      }
    );
  }

}
