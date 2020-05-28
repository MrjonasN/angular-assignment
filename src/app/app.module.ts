import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageViewComponent } from './views/landing-page-view/landing-page-view.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailsViewComponent } from './views/product-details-view/product-details-view.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { HttpClientModule } from '@angular/common/http';
import { ProductCatalogReducer } from './store/reducers/product-catalog-reducer';
import { ProductReducer } from './store/reducers/product.reducer';
import { ShoppingCartReducer } from './store/reducers/shoppingcart.reducer';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { ShoppingcartProductComponent } from './components/shoppingcart-product/shoppingcart-product.component';
import { ShoppingCartQuantityReducer } from './store/reducers/shoppincart-totalqty.reducer';
import { ShoppingCartPriceReducer } from './store/reducers/shoppingcart-totalprice.reducer';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageViewComponent,
    NavbarComponent,
    ProductGridComponent,
    ProductCardComponent,
    ProductDetailsViewComponent,
    ProductDetailComponent,
    ShoppingcartComponent,
    ShoppingcartProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(
      {
        productcatalog: ProductCatalogReducer,
        product: ProductReducer,
        shoppingcart: ShoppingCartReducer,
        shoppingcartTotalQty: ShoppingCartQuantityReducer,
        shoppingcartTotalPrice: ShoppingCartPriceReducer
      },
      {}
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
