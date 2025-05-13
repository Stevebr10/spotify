import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Añade esta línea

@Component({
  selector: 'app-section-generic',
  standalone: true, // Asegúrate que esto esté presente
  imports: [CommonModule], // Agrega aquí otros componentes/directivas/pipes que necesites
  templateUrl: './section-generic.component.html',
  styleUrl: './section-generic.component.css'
})
export class SectionGenericComponent implements OnInit {

  @Input() title: string = ''
  @Input() mode: 'small' | 'big' = 'big'
  @Input() dataTracks: Array<any>=[]

  constructor(){}

  ngOnInit(): void {
      
  }
}
