import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {
  // Documentar el funcionamiento de los servicion y en donde son incorporados
  callback: EventEmitter<any> = new EventEmitter<any>() //Esto es publico


  constructor() { }
}
