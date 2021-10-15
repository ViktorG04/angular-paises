import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-paises',
  templateUrl: './ver-paises.component.html',
  styles: [
  ]

})
export class VerPaisesComponent {

  name: string;
  error: boolean = false;
  paises: Country[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private paisService: PaisService) {
    this.name = (this.route.snapshot.paramMap.get('name')!);
    this.buscar();
  }


  buscar() {
    this.error = false;
    this.paisService.buscarPais(this.name).subscribe((res) => {
      this.paises = res
    }, (err) => {
      this.error = true;
      this.paises = [];
    })
  }


  regresar(){
    this.router.navigate(['/']);
  }
}
