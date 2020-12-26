import { NgModule } from '@angular/core';
import { LogInComponent } from './log-in.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
  declarations: [LogInComponent],
  imports: [
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
    NzInputModule,
    NzButtonModule

  ],
  exports:[LogInComponent]
})
export class LogInModule { }
