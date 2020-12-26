import { NgModule, SkipSelf, Optional } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServicesModule } from 'src/app/services/services.module';
import { PagesModule } from 'src/app/pages/pages.module';
import { ShareModule } from 'src/app/share/share.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
registerLocaleData(en);

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ServicesModule,
    PagesModule,
    ShareModule,
    AppRoutingModule,
  ],
  exports: [
    ShareModule,
    AppRoutingModule,
    PagesModule,
  ],
  providers: [  { provide: NZ_I18N, useValue: en_US }],
})
export class CoreModule {
  constructor(@SkipSelf()  @Optional() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule can only be refered by appModule');
    }
  }
 }
