import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs'; //Programacion reactiva

@Component({
  selector: 'app-media-player',
  standalone: true, // Asegúrate que esto esté presente
  imports: [CommonModule], // Agrega aquí otros componentes/directivas/pipes que necesites
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent implements OnInit, OnDestroy {

  mockCover: TrackModel = {
    //informacion sobre la barra de progreso de la cancion 
    cover: 'https://i.scdn.co/image/ab67616d0000b27345ca41b0d2352242c7c9d4bc',
    album: 'Gioli & Assia',
    name: 'BEBE (Oficial)',
    url: 'http://localhost/tracks.mp3',
    _id: 1
  }

  listObservers$: Array<Subscription>=[]

  constructor(private multimediaService: MultimediaService){}

  ngOnInit(): void {
    const observer1$: Subscription = this.multimediaService.callback.subscribe(
      (response: TrackModel) => {
        console.log('Reciviendo una cancion....', response);
      }
    )
    this.listObservers$ = [observer1$]
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())
    console.log('🔴🔴🔴🔴 BOOOMMM!!!!')
  }

}
