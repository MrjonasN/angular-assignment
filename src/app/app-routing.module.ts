import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageViewComponent } from './views/landing-page-view/landing-page-view.component';
import { ProductDetailsViewComponent } from './views/product-details-view/product-details-view.component';

const routes: Routes = [
  { path: '', component: LandingPageViewComponent },
  { path: 'products', component: LandingPageViewComponent },
  { path: 'products/:id', component: ProductDetailsViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
