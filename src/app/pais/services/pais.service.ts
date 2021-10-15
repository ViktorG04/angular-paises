import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {DataCovid} from '../interfaces/covid.interface';
import { Country } from '../interfaces/pais.interface';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string ="https://restcountries.com/v3.1";
  constructor( private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]>{
    const url = `${this.apiUrl}/name/${termino}`;
     return this.http.get<Country[]>(url);
  };


  buscarCapital(termino: string): Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${termino}`;
     return this.http.get<Country[]>(url);
  };

  buscarContinente(termino: string): Observable<Country[]>{
    const url = `${this.apiUrl}/region/${termino}`;
     return this.http.get<Country[]>(url);
  };
  
  listarCovid(): Observable<DataCovid[]>{
    let urONU = "https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases2_v1/FeatureServer/2/query?where=1%3D1&outFields=Country_Region,Confirmed,Deaths,Incident_Rate,Mortality_Rate&f=json";
    return this.http.get<DataCovid[]>(urONU);
  };

}
