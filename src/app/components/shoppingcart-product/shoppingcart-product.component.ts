import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shoppingcart-product',
  templateUrl: './shoppingcart-product.component.html',
  styleUrls: ['./shoppingcart-product.component.css'],
})
export class ShoppingcartProductComponent implements OnInit {
  constructor(private shoppingCartService: ShoppingCartService) {}

  @Input('item') public item;

  ngOnInit(): void {}

  remove(id){
    this.shoppingCartService.remove(id)
  }

  increment(product) {
    this.shoppingCartService.increment(product)
  }

  decrement(product) {
    this.shoppingCartService.decrement(product)
  }


}
