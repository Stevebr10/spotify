import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  //puede ser oublico o privado si no s elo especifica es publico por defecto
  public sendCredentials(email: string, password: string): void{
    console.log('🆗🆗', email, password)
  }

}
