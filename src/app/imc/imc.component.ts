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

cal(){
    this.imc = this.peso / (this.altura * 2);

     this.imc;

  }

}
