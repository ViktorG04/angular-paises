import { Component } from '@angular/core';
import { Country} from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent  {

  constructor(private paisService: PaisService, private router: Router) { }

  termino: string="Honduras";
  error: boolean = false;
  paises : Country[] = [];

  obtenerPais(pais: any = this.paises){
    let name = pais['0']['name']['common'];
    this.router.navigate(['/pais', name]);
  };
  
  buscar(){
      this.error = false;
      this.paisService.buscarPais(this.termino).subscribe((res) => {
         this.paises = res
      },  (err)=>{
      this.error = true;
      this.paises = [];
      })
  }
};

