import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-boton-start',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './boton-start.component.html',
  styleUrl: './boton-start.component.css',
})
export class BotonStartComponent {
  @Output() toggleTimer = new EventEmitter();
  estadoTimer: boolean = false;

  ToggleIniciar() {
    this.estadoTimer = !this.estadoTimer;
    this.toggleTimer.emit(this.estadoTimer);
  }
}
