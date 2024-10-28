import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-stripe',
  standalone: true,
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.css'],
})
export class StripeComponent implements OnInit {
  stripe: any;

  constructor() {}

  async ngOnInit() {
    // Carga Stripe con tu clave pública
    this.stripe = await loadStripe('pk_test_51QEvYxHvRGf2ixKsvxbp4SIQym1nWVYe5JzuWuck0Sp0LtkYd7Ntt6qcnCwaCr6GIlq2dM1VAg0G512QEh1u8azJ00Y8eML9zz');
  }

  async pay() {
    // Lógica de pago aquí
    console.log('Pago realizado');
  }
}