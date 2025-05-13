import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule
import { SectionGenericComponent } from '@shared/components/section-generic/section-generic.component';
import { RouterModule } from '@angular/router';
import * as dataRaw from '../../../../data/tracks.json'
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-tracks-page',
  standalone: true, // Asegúrate que esto esté presente
  imports: [CommonModule, SectionGenericComponent, RouterModule ], // Agrega aquí otros componentes/directivas/pipes que necesites
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent implements OnInit{

  mockTracksList: Array<TrackModel> = [
    
  ]
  constructor(){
    
  }
  ngOnInit(): void {
    const {data}: any = (dataRaw as any).default
    this.mockTracksList = data;
  }
}
