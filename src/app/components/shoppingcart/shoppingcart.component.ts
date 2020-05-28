import { Component, OnInit } from '@angular/core';
import { IShoppingCart } from 'src/app/models/ishoppingcart.model';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/istate.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css'],
})
export class ShoppingcartComponent implements OnInit {

  constructor(
    private store: Store<IState>
  ) {}

  public shoppingcart: Observable<Array<IShoppingCart>>
  public totalPrice: number;

  ngOnInit(): void {
    this.shoppingcart = this.store.select(store => store.shoppingcart)
    this.store.select(store => store.shoppingcartTotalPrice).subscribe(res => this.totalPrice = res)
  }


}
