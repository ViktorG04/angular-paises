import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisesComponent } from './pages/ver-paises/ver-paises.component';
import {CovidporPaisComponent} from './pages/covid/covid-por-pais.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisesComponent,
    CovidporPaisComponent],
  exports:[
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisesComponent,
    CovidporPaisComponent

  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PaisModule {


 }
