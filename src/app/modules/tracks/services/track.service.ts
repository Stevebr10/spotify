import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
//import * as dataRaw from '../../../data/tracks.json'

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  //dataTracksTrending$: Observable<TrackModel[]> = of([]);
  //dataTracksRandom$: Observable<any> = of([]);

  //private readonly URL = environment.api;

  constructor() {
    
   }

  
}
