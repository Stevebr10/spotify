import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule


@Component({
  selector: 'app-login-page',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit {
  
  constructor(){

  }

  ngOnInit(): void {
      
  }
}
