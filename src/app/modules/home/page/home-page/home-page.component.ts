import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MediaPlayerComponent } from '@shared/components/media-player/media-player.component';
import { SideBarComponent } from '@shared/components/side-bar/side-bar.component';


@Component({
  selector: 'app-home-page',
  standalone: true, // Añadir esto
  imports: [ // Importar el componente standalone
    SideBarComponent,
    MediaPlayerComponent, 
    RouterModule 
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
      
  }

}
