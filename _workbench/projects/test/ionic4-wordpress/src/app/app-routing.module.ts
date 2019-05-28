import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'registration', loadChildren: './registration/registration.module#RegistrationPageModule' },
  { path: 'registration/:id', loadChildren: './product-details/product-details.module#ProductDetailsPageModule' },
  { path: 'product-details', loadChildren: './product-details/product-details.module#ProductDetailsPageModule' },
  { path: 'edit-product', loadChildren: './edit-product/edit-product.module#EditProductPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
