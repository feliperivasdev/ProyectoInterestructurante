import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from "@angular/common/http";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from "./shared/shared.module";
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ContentLayoutComponent } from "./layouts/content/content-layout.component";
import { FullLayoutComponent } from "./layouts/full/full-layout.component";

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: false
};

import * as $ from 'jquery';
import { ElectrodomesticosComponent } from './electrodomesticos/electrodomesticos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ConsumoComponent } from './consumo/consumo.component';
import { ReporteComponent } from './reporte/reporte.component';
import { CreateUsuariosComponent } from './create-usuarios/create-usuarios.component';
import { DeleteUsuariosComponent } from './delete-usuarios/delete-usuarios.component';
import { EditUsuariosComponent } from './edit-usuarios/edit-usuarios.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateConsumoComponent } from './create-consumo/create-consumo.component';
import { DeleteConsumoComponent } from './delete-consumo/delete-consumo.component';
import { EditConsumoComponent } from './edit-consumo/edit-consumo.component';
import { CreateElectrodomesticosComponent } from './create-electrodomesticos/create-electrodomesticos.component';
import { DeleteElectrodomesticosComponent } from './delete-electrodomesticos/delete-electrodomesticos.component';
import { EditElectrodomesticosComponent } from './edit-electrodomesticos/edit-electrodomesticos.component';
import { DeleteReporteComponent } from './delete-reporte/delete-reporte.component';
import { EditReporteComponent } from './edit-reporte/edit-reporte.component';


@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    ContentLayoutComponent,
    ElectrodomesticosComponent,
    UsuariosComponent,
    ConsumoComponent,
    ReporteComponent,
    CreateUsuariosComponent,
    DeleteUsuariosComponent,
    EditUsuariosComponent,
    CreateConsumoComponent,
    DeleteConsumoComponent,
    EditConsumoComponent,
    CreateElectrodomesticosComponent,
    DeleteElectrodomesticosComponent,
    EditElectrodomesticosComponent,
    DeleteReporteComponent,
    EditReporteComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    SharedModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyDKXKdHQdtqgPVl2HI2RnUa_1bjCxRCQo4'}),
    PerfectScrollbarModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
