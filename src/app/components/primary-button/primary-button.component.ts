import { Component, input } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.scss'
})
export class PrimaryButtonComponent {
  // declaring an input signal
  label = input('');

  handleButtonClick(){
    console.log('Button Clicked')
  }


}
