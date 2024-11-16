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


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'usuarios',
        component: UsuariosComponent,
        data: {
          title: 'Usuarios'
        }
      },

      {
        path: 'create-usuarios',
        component: CreateUsuariosComponent,
        data: {
          title: 'Create-Usuarios'
        }
      },

      {
        path: 'electrodomesticos',
        component: ElectrodomesticosComponent,
        data: {
          title: 'Electrodomesticos'
        }
      },
      {
        path: 'create-electrodomesticos',
        component: CreateElectrodomesticosComponent,
        data: {
          title: 'Create-Electrodomesticos'
        }
      },

      {
        path: 'consumo',
        component: ConsumoComponent,
        data: {
          title: 'Consumo'
        }
      },

      {
        path: 'create-consumo',
        component: CreateConsumoComponent,
        data: {
          title: 'Create-Consumo'
        }
      },
      {
        path: 'reporte',
        component: ReporteComponent,
        data: {
          title: 'Reporte'
        }
      },
      
      {
        path: 'default',
        component: DefaultComponent,
        data: {
          title: 'Default'
        }
      },
      {
        path: 'e-commerce',
        component: ECommerceComponent,
        data: {
          title: 'e-Commerce'
        }
      },
      {
        path: 'analytics',
        component: AnalyticsComponent,
        data: {
          title: 'Analytics'
        }
      },
      {
        path: 'digital-marketing',
        component: DigitalMarketingComponent,
        data: {
          title: 'Digital Marketing'
        }
      },
      {
        path: 'human-resources',
        component: HumanResourcesComponent,
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
