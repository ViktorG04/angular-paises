import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {

  constructor(private regionService : PaisService, private router: Router) { }

  termino: string="America";
  error: boolean = false;
  regiones : Country [] = []

  buscar(){
      this.error = false;
      this.regionService.buscarContinente(this.termino).subscribe((res) => {
         this.regiones = res
      },  (err)=>{
      this.error = true;
      this.regiones = [];
      })
  };

  obtenerPais(pais: any = this.regiones){
    let name = pais['name']['common'];
    this.router.navigate(['/pais', name]);
  };

}
