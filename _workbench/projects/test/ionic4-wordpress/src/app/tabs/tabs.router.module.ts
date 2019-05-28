import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'registration',
        children: [
          {
            path: '',
            loadChildren: '../registration/registration.module#RegistrationPageModule'
          }
        ]
      },
      {
        path: 'registration/edit-product',
        children: [
          {
            path: '',
            loadChildren: '../edit-product/edit-product.module#EditProductPageModule'
          }
        ]
      },
      {
        path: 'registration/:id/edit',
        children: [
          {
            path: '',
            loadChildren: '../edit-product/edit-product.module#EditProductPageModule'
          }
        ]
      },
      {
        path: 'registration/:id',
        children: [
          {
            path: '',
            loadChildren: '../product-details/product-details.module#ProductDetailsPageModule'
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: '../about/about.module#AboutPageModule'
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: '../profile/profile.module#ProfilePageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/registration',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/registration',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
