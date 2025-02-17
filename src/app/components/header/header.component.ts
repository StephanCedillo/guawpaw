import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  day: string;
  month: string;

  constructor() {
    const now = new Date();
    const dayOptions: Intl.DateTimeFormatOptions = { day: '2-digit' };
    const monthOptions: Intl.DateTimeFormatOptions = { month: 'short' };

    this.day = now.toLocaleDateString('es-ES', dayOptions);
    this.month = now.toLocaleDateString('es-ES', monthOptions).replace('.', ''); // Remueve el punto del mes
  }

}
