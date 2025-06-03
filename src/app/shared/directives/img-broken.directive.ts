import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({
  selector: 'img[appImgBroken]',
  standalone: true
})
export class ImgBrokenDirective {
  @Input() customImg: string=''
  //host Host HOST
  @HostListener('error') handleError(): void{
    const elNative = this.elHost.nativeElement;
    console.log('🔴 Esta imagen revento ->', this.elHost);
    //elNative.src='images/imgbroken.jpg'
    //elNative.src='https://i.pinimg.com/736x/69/d5/3e/69d53ef9520b57a5e2af1b1387807fc7.jpg'
    elNative.src=this.customImg
  }

  constructor(private elHost: ElementRef) { 
    console.log(this.elHost);
  }

}

// import { Directive, ElementRef, HostListener, Input } from '@angular/core';

// @Directive({
//   selector: 'img[appImgBroken]',
//   standalone: true
// })
// export class ImgBrokenDirective {
  
//   @Input() appImgBroken: string = 'https://i.pinimg.com/736x/69/d5/3e/69d53ef9520b57a5e2af1b1387807fc7.jpg';
//   private hasError: boolean = false;

//   constructor(private elHost: ElementRef) {
//     console.log('🟢 Directiva ImgBroken inicializada');
//   }

//   @HostListener('error', ['$event']) 
//   handleError(event: any): void {
//     console.log('🔴 ERROR detectado en imagen');
//     console.log('🔴 Src original:', event.target.src);
    
//     if (!this.hasError) {
//       this.hasError = true;
//       const elNative = this.elHost.nativeElement;
//       console.log('🔴 Cambiando src a:', this.appImgBroken);
//       elNative.src = this.appImgBroken;
//     }
//   }

//   @HostListener('load', ['$event'])
//   handleLoad(event: any): void {
//     console.log('🟢 Imagen cargada correctamente:', event.target.src);
//   }
// }