import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { Item, ShoppingCart } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private shoppingCart$: BehaviorSubject<ShoppingCart>;

  constructor(private http: HttpClient) {
    this.shoppingCart$ = new BehaviorSubject<ShoppingCart>({
      id: '',
      items: [],
      subTotal: 0,
    });

    this.getShoppingCart();
  }

  private getShoppingCart() {
    this.http.get<ShoppingCart>('/assets/data.json').subscribe(
      (shoppingCart) => {
        console.log(shoppingCart);
        this.setShoppingCart(shoppingCart);
      },
      () => {
        console.error('Shopping cart data could not be loaded.');
      }
    );
  }

  private setShoppingCart(shoppingCart: ShoppingCart) {
    this.shoppingCart$.next(shoppingCart);
  }

  getItems(): Observable<Item[]> {
    return this.shoppingCart$.pipe(pluck('items'));
  }

  getSubTotal(): Observable<number> {
    return this.shoppingCart$.pipe(
      map((shoppingCart) => {
        const subTotal = shoppingCart?.items
          .map((item) => item.quantity * item.sku.price)
          .reduce((acc, curr) => acc + curr, 0);
        return subTotal;
      })
    );
  }

  getCount(): Observable<number> {
    return this.shoppingCart$.pipe(
      map((shoppingCart) => {
        const count = shoppingCart.items
          .map((item) => item.quantity)
          .reduce((p, c) => p + c, 0);
        return count;
      })
    );
  }

  updateQuantity(updateQuantity: number, updateItem: Item) {
    const shoppingCart = { ...this.shoppingCart$.value };
    shoppingCart.items = shoppingCart.items.map((item) => {
      item.quantity =
        item.id === updateItem.id ? +updateQuantity : item.quantity;
      return item;
    });
    this.setShoppingCart(shoppingCart);
  }

  deleteItem(deleteItem: Item) {
    const shoppingCart = { ...this.shoppingCart$.value };
    shoppingCart.items = shoppingCart.items.filter(
      (item) => deleteItem.id !== item.id
    );
    this.setShoppingCart(shoppingCart);
  }
}
