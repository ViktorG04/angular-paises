import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent{

  constructor(private capitalService: PaisService, private router: Router) { }

  termino: string="San Salvador";
  error: boolean = false;
  capitales : Country[] = [];

  buscar(){
      this.error = false;
      this.capitalService.buscarCapital(this.termino).subscribe((res) => {
         this.capitales = res
      },  (err)=>{
      this.error = true;
      this.capitales = [];
      })
  };

  obtenerPais(pais: any = this.capitales){
    let name = pais['0']['name']['common'];
    this.router.navigate(['/pais', name]);
  };
}
