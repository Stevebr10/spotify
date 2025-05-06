import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Añade esta línea

@Component({
  selector: 'app-side-bar',
  standalone: true, // Asegúrate que esto esté presente
  imports: [CommonModule], // Agrega aquí otros componentes/directivas/pipes que necesites
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit {
  linksMenu:Array<any> = [
    {
      name: 'Home',
      icon: 'uil-estate'
    },
    {
      name: 'Buscar',
      icon: 'uil-estate'
    }
  ]

  constructor(){}

  ngOnInit(): void {
      
  }

}
