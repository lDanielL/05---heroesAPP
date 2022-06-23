import { Component, Input } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-hero-tarjeta',
  templateUrl: './hero-tarjeta.component.html',
  styles:[
    `
    mat-card {
      margin-top:20px
    }
    `
  ]
})
export class HeroTarjetaComponent  {

  @Input() heroe!: Heroe;

  constructor() { }

  

}
