import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule
import { TrackModel } from '@core/models/tracks.model';
import { ImgBrokenDirective } from '@shared/directives/img-broken.directive';
import { MultimediaService } from '@shared/services/multimedia.service';


@Component({
  selector: 'app-card-player',
  standalone: true, // Colocar standalone true para compnentes indepedientes 
  imports: [CommonModule, ImgBrokenDirective], // Agrega aquí otros componentes/directivas/pipes que necesites
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.css'
})
export class CardPlayerComponent implements OnInit{

  //Aqui se define las cartas de las cancines, en dos secciones la pequeña y grande
  @Input() mode: 'small' | 'big' = 'small';
  @Input() track: TrackModel = {_id:0, name:'', album:'', url:'', cover:''};

  constructor(private multimediaService: MultimediaService){

  }

  ngOnInit(): void {
      
  }

  sendPlay(track: TrackModel): void{
    //console.log('Enviando cancion al reproductor')
    this.multimediaService.callback.emit(track)
  }

}
