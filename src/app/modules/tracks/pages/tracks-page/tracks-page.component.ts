import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule
import { SectionGenericComponent } from '@shared/components/section-generic/section-generic.component';
import { RouterModule } from '@angular/router';
import * as dataRaw from '../../../../data/tracks.json'
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  standalone: true, // Asegúrate que esto esté presente
  // Agrega aquí otros componentes/directivas/pipes que necesites
  imports: [CommonModule, SectionGenericComponent, RouterModule ], 
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent implements OnInit, OnDestroy{

  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []

  listObservers$: Array<Subscription> =[]

  constructor(private tracksServices: TrackService){
    
  }
  // ngOnInit(): void {
  //   const {data}: any = (dataRaw as any).default
  //   this.mockTracksList = data;
  // }
  ngOnInit(): void {
    const observer1$ = this.tracksServices.dataTracksTrending$
    .subscribe(response =>{
      this.tracksTrending = response
      this.tracksRandom = response
      console.log('Canciones Trending -->', response);
    })

    const observer2$ = this.tracksServices.dataTracksRandom$
    .subscribe(response =>{
      this.tracksRandom = [...this.tracksRandom, ...response]
      console.log('Cancion random entrando... -->', response);
    })

    this.listObservers$ = [observer1$, observer2$]
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u=>u.unsubscribe())
  }

}
