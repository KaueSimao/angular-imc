import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent {
  peso : number;
  altura : number;
  imc : number;

  constructor(){
    let imc = 0;
    let alt = this.altura;
    let pes = this.peso;

    this.imc = peso / (alt** 2);
    alert(this.imc);

     this.imc;

  }

}
