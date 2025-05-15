import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-favorites-page',
  standalone: true, // Asegúrate que esto esté presente
  imports: [CommonModule, RouterModule ], 
  templateUrl: './favorites-page.component.html',
  styleUrl: './favorites-page.component.css'
})
export class FavoritesPageComponent implements OnInit{

  constructor() {

  }

  ngOnInit(): void {
      
  }
}
