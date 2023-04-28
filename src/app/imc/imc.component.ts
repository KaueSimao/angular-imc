import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent {
  peso : number ;
  altura : number;
  imc : number;
  resul : string;

cal(){
    this.imc = this.peso / (this.altura * this.altura);
    if (this.imc   <= 18.4)
    this.resul= 'Magreza';

    if  (this.imc >= 18.5 )
    this.resul= 'Peso Ideal';

    if  (this.imc >= 24.9 )
    this.resul= 'Acima do Peso';

    if  (this.imc >= 29.9 )
    this.resul= 'Obesidade Grau I';

    if  (this.imc >= 34.9 )
    this.resul= 'Obesidade Grau II';

    if  (this.imc >= 39.9 )
    this.resul= 'Obesidade Grau III';
  }

}
