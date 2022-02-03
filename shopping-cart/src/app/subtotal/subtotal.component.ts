import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-subtotal',
  templateUrl: './subtotal.component.html',
  styleUrls: ['./subtotal.component.css'],
})
export class SubtotalComponent implements OnInit {
  count$: Observable<number> | undefined;
  subTotal$: Observable<number> | undefined;

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {
    this.subTotal$ = this.shoppingCartService.getSubTotal();
    this.count$ = this.shoppingCartService.getCount();
  }
}
