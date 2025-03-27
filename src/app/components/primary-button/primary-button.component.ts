import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.scss'
})
export class PrimaryButtonComponent {
  // declaring an input signal
  label = input('');

  // first methode
  /* handleButtonClick(){
    console.log('Button Clicked')
  } */

  // seconde way using output
  /* handleButtonClick(){
    this.btnClicked.emit();
  } */

  //Third methode is to implemented directly
  btnClicked = output();

  


}
