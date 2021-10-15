import { Component } from '@angular/core';
import { Attributes, DataCovid, Feature } from '../../interfaces/covid.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './covid-por-pais.component.html',
  styles: [
  ]
})
export class CovidporPaisComponent{

  constructor(private capitalService: PaisService) {

   }

  pais: string="El Salvador";
  error: boolean = false;
  listPais: any | Attributes[] = []
  data: any | DataCovid[] = [];
  
  buscar(){

      
      this.capitalService.listarCovid().subscribe((res) => {
         this.data = res
        for(let i in this.data['features']){
  
          if(this.data['features'][i]['attributes']['Country_Region'] == this.pais)
          {
            this.listPais =  (this.data['features'][i]['attributes']);
          }
          else{
            this.error = false;
          }
        }
      },  (err)=>{
      this.error = true;
      this.listPais = [];
      })
  };
}
