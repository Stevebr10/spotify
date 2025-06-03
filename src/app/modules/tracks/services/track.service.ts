import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import * as dataRaw from '../../../data/tracks.json'

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  dataTracksTrending$: Observable<TrackModel[]> = of([]);
  dataTracksRandom$: Observable<any> = of([]);

  constructor() {
    const {data}: any = (dataRaw as any).default;
    this.dataTracksTrending$ = of(data)

    this.dataTracksRandom$ = new Observable((observer)=>{

      const trackExample: TrackModel = {
        _id:9,
        name: 'Leve',
        album: 'Cartel de Santa',
        url: 'http://',
        cover: 'https://cdn-images.dzcdn.net/images/cover/f4ac5d5a119be8ebc1005f3ffbbb1f02/1900x1900-000000-80-0-0.jpg',
      }

      setTimeout(() => {
        observer.next([trackExample])
      }, 3500);
      
    })
   }
}
