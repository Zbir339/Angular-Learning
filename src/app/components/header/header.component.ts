import { Component, signal } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  // static data declaration
  title = 'My First Angular App';
  // dynamique data using signals
  titre = signal<string>('Mon Premier Signal Angular')

}
