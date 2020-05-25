import { Component, OnInit } from '@angular/core';
import { ProductCatalogService } from 'src/app/services/product-catalog.service';

@Component({
  selector: 'app-landing-page-view',
  templateUrl: './landing-page-view.component.html',
  styleUrls: ['./landing-page-view.component.css'],
})
export class LandingPageViewComponent implements OnInit {
  constructor(private productCatalogService: ProductCatalogService) {}

  ngOnInit(): void {
    this.productCatalogService.get();
  }
}
