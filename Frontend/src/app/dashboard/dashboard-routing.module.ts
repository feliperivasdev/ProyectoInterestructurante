import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultComponent } from './default/default.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { DigitalMarketingComponent } from './digital-marketing/digital-marketing.component';
import { HumanResourcesComponent } from './human-resources/human-resources.component';
import { ElectrodomesticosComponent } from '../electrodomesticos/electrodomesticos.component';
import { UsuariosComponent } from '../usuarios/usuarios.component';
import { ConsumoComponent } from '../consumo/consumo.component';
import { ReporteComponent } from '../reporte/reporte.component';
import { CreateUsuariosComponent } from '../create-usuarios/create-usuarios.component';
import { CreateElectrodomesticosComponent } from '../create-electrodomesticos/create-electrodomesticos.component';
import { CreateConsumoComponent } from '../create-consumo/create-consumo.component';
import { LoginGuard } from '../guards/login/login.guard';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'usuarios',
        component: UsuariosComponent,canActivate:[LoginGuard],
        data: {
          title: 'Usuarios'
        }
      },

      {
        path: 'create-usuarios',
        component: CreateUsuariosComponent,canActivate:[LoginGuard],
        data: {
          title: 'Create-Usuarios'
        }
      },

      {
        path: 'electrodomesticos',
        component: ElectrodomesticosComponent,canActivate:[LoginGuard],
        data: {
          title: 'Electrodomesticos'
        }
      },
      {
        path: 'create-electrodomesticos',
        component: CreateElectrodomesticosComponent,canActivate:[LoginGuard],
        data: {
          title: 'Create-Electrodomesticos'
        }
      },

      {
        path: 'consumo',
        component: ConsumoComponent,canActivate:[LoginGuard],
        data: {
          title: 'Consumo'
        }
      },

      {
        path: 'create-consumo',
        component: CreateConsumoComponent,canActivate:[LoginGuard],
        data: {
          title: 'Create-Consumo'
        }
      },
      {
        path: 'reporte',
        component: ReporteComponent,canActivate:[LoginGuard],
        data: {
          title: 'Reporte'
        }
      },
    
      {
        path: 'default',
        component: DefaultComponent,canActivate:[LoginGuard],
        data: {
          title: 'Default'
        }
      },
      {
        path: 'e-commerce',
        component: ECommerceComponent,canActivate:[LoginGuard],
        data: {
          title: 'e-Commerce'
        }
      },
      {
        path: 'analytics',
        component: AnalyticsComponent,canActivate:[LoginGuard],
        data: {
          title: 'Analytics'
        }
      },
      {
        path: 'digital-marketing',
        component: DigitalMarketingComponent,canActivate:[LoginGuard],
        data: {
          title: 'Digital Marketing'
        }
      },
      {
        path: 'human-resources',
        component: HumanResourcesComponent,canActivate:[LoginGuard],
        data: {
          title: 'Human Resources'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
