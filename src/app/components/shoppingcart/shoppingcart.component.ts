import { Component, OnInit } from '@angular/core';
import { IShoppingCart } from 'src/app/models/ishoppingcart.model';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/istate.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css'],
})
export class ShoppingcartComponent implements OnInit {

  public shoppingcart: Observable<Array<IShoppingCart>>

  constructor(
    private shoppingcartService: ShoppingCartService,
    private store: Store<IState>
  ) {}

  ngOnInit(): void {
    this.shoppingcart = this.store.select(store => store.shoppingcart)
  }


}
