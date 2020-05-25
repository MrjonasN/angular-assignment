import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Store } from '@ngrx/store';
import { IState } from '../../models/istate.model';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../models/iproduct.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  public product: IProduct;

  constructor(
    private router: ActivatedRoute,
    private productService: ProductService,
    private store: Store<IState>
  ) {}

  ngOnInit(): void {
    this.productService.getById(this.router.snapshot.params.id);
    this.store
      .select((store) => store.product)
      .subscribe(res => this.product = res)
  }
}
