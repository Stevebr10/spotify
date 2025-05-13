import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule
import { SectionGenericComponent } from '@shared/components/section-generic/section-generic.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tracks-page',
  standalone: true, // Asegúrate que esto esté presente
  imports: [CommonModule, SectionGenericComponent, RouterModule ], // Agrega aquí otros componentes/directivas/pipes que necesites
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent implements OnInit{

  mockTracksList = [
    {
      name: 'BEBE (Oficial)'
    },
    {
      name: 'BEBE (Oficial)'
    },
    {
      name: 'BEBE (Oficial)'
    }
  ]
  constructor(){
    
  }
  ngOnInit(): void {
      
  }
}
