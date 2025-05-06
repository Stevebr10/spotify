import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from '@shared/components/side-bar/side-bar.component';


@Component({
  selector: 'app-home-page',
  standalone: true, // Añadir esto
  imports: [
    SideBarComponent // Importar el componente standalone
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
      
  }

}
