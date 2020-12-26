import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'categories/:id',
    loadChildren: () => import('./pages/categories/categories.module').then(mod => mod.CategoriesModule)
  },
   {
    path: 'categories',
    loadChildren: () => import('./pages/categories/categories.module').then(mod => mod.CategoriesModule)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//path: 'categories/:id',
