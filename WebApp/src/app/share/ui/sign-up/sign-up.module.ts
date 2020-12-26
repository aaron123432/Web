import { NgModule } from '@angular/core';
import { SignUpComponent } from './sign-up.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSelectModule } from 'ng-zorro-antd/select';

@NgModule({
  declarations: [SignUpComponent],
  imports: [
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
    NzInputModule,
    NzCheckboxModule,
    NzSelectModule
  ], 
  exports: [
    SignUpComponent,

  ]
})
export class SignUpModule { }
