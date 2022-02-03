import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SummaryComponent implements OnInit {
  count$: Observable<number> | undefined;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.count$ = this.shoppingCartService.getCount();
  }

}
