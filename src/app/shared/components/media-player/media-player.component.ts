import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule

@Component({
  selector: 'app-media-player',
  standalone: true, // Asegúrate que esto esté presente
  imports: [CommonModule], // Agrega aquí otros componentes/directivas/pipes que necesites
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent implements OnInit {
mockCover: any = {
  cover: 'https://i.scdn.co/image/ab67616d0000b27345ca41b0d2352242c7c9d4bc',
  album: 'Gioli & Assia',
  name: 'BEBE (Oficial)'
}

  constructor(){}

  ngOnInit(): void {
      
  }

}
