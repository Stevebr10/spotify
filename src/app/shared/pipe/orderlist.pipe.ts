import { Pipe, PipeTransform } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Pipe({
  name: 'orderlist'
})
export class OrderlistPipe implements PipeTransform {

  transform(value: TrackModel[]): TrackModel[] {
    
    console.log('👉', value)
    
    return [];
  }

}
