import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TracksRoutingModule } from './tracks-routing.module';
import { TracksPageComponent } from './pages/tracks-page/tracks-page.component';
import { SharedModule } from '@shared/shared.module';
import { SectionGenericComponent } from '@shared/components/section-generic/section-generic.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    //No se declara si es standalone
  ],
  imports: [
    CommonModule,
    TracksRoutingModule,
    SharedModule,
    TracksPageComponent,
    HttpClientModule
    //SectionGenericComponent
    
  ],
  exports: [
    CommonModule,
    TracksRoutingModule,
    //SharedModule,
    //TracksPageComponent
    
  ]
})
export class TracksModule { }
