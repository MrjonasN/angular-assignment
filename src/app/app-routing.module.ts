import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageViewComponent } from './views/landing-page-view/landing-page-view.component';

const routes: Routes = [{ path: '', component: LandingPageViewComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
