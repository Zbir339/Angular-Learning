import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  // static data declaration
  title = 'My First Angular App';
  // dynamique data using signals
  titre = signal<string>('Mon Premier Signal Angular')

}
