import { NgModule } from '@angular/core';

import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpModule } from './sign-up/sign-up.module';
import { LogInModule } from './log-in/log-in.module';




@NgModule({
  declarations: [],
  imports: [
    SignUpModule,LogInModule
  ],
  exports:[
    SignUpModule,LogInModule
  ]
})
export class UiModule { }
