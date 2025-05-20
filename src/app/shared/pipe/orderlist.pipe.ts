import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderlist'
})
export class OrderlistPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
