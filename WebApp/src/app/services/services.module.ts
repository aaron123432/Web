import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';

export const API_CONFIG = new InjectionToken('ApiConfigToken');


@NgModule({
  declarations: [],
  imports: [
    
  ],
  providers: [
    { provide: API_CONFIG, useValue: 'http://localhost:11/' }
  ]
})
export class ServicesModule { }
