import { Component } from '@angular/core';
import { StripeComponent } from './stripe/stripe.component'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-root',
  standalone: true,
  template: '<app-stripe></app-stripe>', // Usamos el selector del componente Stripe
  imports: [StripeComponent], // Agregamos StripeComponent aquí
})
export class AppComponent {}