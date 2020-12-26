import { ServicesModule, API_CONFIG } from './services.module';
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: ServicesModule
})
export class HomeService {

  constructor(private http: HttpClient, @Inject(API_CONFIG) private uri: string) { }
}
