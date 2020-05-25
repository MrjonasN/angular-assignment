import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../models/iproduct.model';
import { Store } from '@ngrx/store';
import { IState } from '../../models/istate.model';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css'],
})
export class ProductGridComponent implements OnInit {
  public productcatalog: Observable<Array<IProduct>>;

  constructor(private store: Store<IState>) {}

  ngOnInit(): void {
    this.productcatalog = this.store.select((store) => store.productcatalog);
  }
}
