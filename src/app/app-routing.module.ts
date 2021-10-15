import { RouterModule, Routes } from '@angular/router';
import { NgModule} from '@angular/core'; '@angular/core';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisesComponent } from './pais/pages/ver-paises/ver-paises.component';
import { CovidporPaisComponent } from './pais/pages/covid/covid-por-pais.component';



export const routes: Routes = [
  {
    path:'',
    component: PorPaisComponent,
    pathMatch:'full'
  },
  {
    path:'region',
    component: PorRegionComponent,

  },
  {
    path:'capital',
    component: PorCapitalComponent,

  },
  {
    path:'pais/:name',
    component: VerPaisesComponent,

  },
  {
    path:'covid',
    component: CovidporPaisComponent,
  },
  {
    path:'**',
    redirectTo: '',

  },

]


@NgModule({
  imports:[
      RouterModule.forRoot(routes)
  ],
  exports:[
        RouterModule
  ]
})
export class AppRoutingModule{


}