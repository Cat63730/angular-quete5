import { Component } from '@angular/core';
import { Order } from '../modele';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  model: Order = new Order('','','','');

constructor(){}

onSubmit(): void{
  console.log(this.model);
}
}
