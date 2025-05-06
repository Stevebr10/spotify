import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';


@NgModule({
  declarations: [
    //SideBarComponent, //SOLO compomentes NO standalone aqui
  ],
  imports: [
    CommonModule,
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent
  ],
  exports:[
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent
  ]
})
export class SharedModule { }
