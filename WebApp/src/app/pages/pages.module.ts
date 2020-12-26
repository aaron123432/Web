import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';
import { CategoriesModule } from './categories/categories.module';




@NgModule({
  declarations: [],
  imports: [
    HomeModule,
    CategoriesModule,
    
  ],
  exports:[
    HomeModule,
    CategoriesModule,
    
  ]
})
export class PagesModule { }
