import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/istate.model';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/iproduct.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private router: ActivatedRoute, private productService: ProductService, private store: Store<IState>) { }

  ngOnInit(): void {
    this.productService
  }

}
