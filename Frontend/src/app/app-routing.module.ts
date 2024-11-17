
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { FullLayoutComponent } from "./layouts/full/full-layout.component";
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";

import { Full_ROUTES } from "./shared/routes/full-layout.routes";
import { CONTENT_ROUTES } from "./shared/routes/content-layout.routes";
import { HomeComponent } from './home/home.component';

import { UsuariosComponent } from './usuarios/usuarios.component';
import { DeleteUsuariosComponent } from './delete-usuarios/delete-usuarios.component';
import { EditUsuariosComponent } from './edit-usuarios/edit-usuarios.component';
import { EditElectrodomesticosComponent } from './edit-electrodomesticos/edit-electrodomesticos.component';
import { DeleteElectrodomesticosComponent } from './delete-electrodomesticos/delete-electrodomesticos.component';
import { DeleteConsumoComponent } from './delete-consumo/delete-consumo.component';
import { DeleteReporteComponent } from './delete-reporte/delete-reporte.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: '', component: HomeComponent },
  { path: '', component: FullLayoutComponent, data: { title: 'full Views' }, children: Full_ROUTES },
  { path: '', component: ContentLayoutComponent, data: { title: 'content Views' }, children: CONTENT_ROUTES },
  { path: 'dashboard/usuarios', component: UsuariosComponent },
  { path: 'dashboard/edit-usuarios/:id', component: EditUsuariosComponent },
  { path: 'dashboard/delete-usuarios/:id', component: DeleteUsuariosComponent },
  { path: 'dashboard/edit-electrodomesticos/:id', component: EditElectrodomesticosComponent },
  { path: 'dashboard/delete-electrodomesticos/:id', component: DeleteElectrodomesticosComponent },
  { path: 'dashboard/delete-consumo/:id', component: DeleteConsumoComponent}, 
  { path: 'dashboard/delete-reporte/:id', component:DeleteReporteComponent},
  { path: '**', redirectTo: 'dashboard/default' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }



