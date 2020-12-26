import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ecommercial';

  isLogin = false
  visible = false

  sOrL = 'S'
  constructor() {}

  ngOnInit(): void {

  }

 

  openLogIn(): void {
    this.visible = true;
    this.sOrL = 'S'
  }
  openRegister(): void {
    this.visible = true;
    this.sOrL = 'L'
  }

  close(): void {
    this.visible = false;
  }





  
}



