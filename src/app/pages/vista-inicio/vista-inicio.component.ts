import { Component } from '@angular/core';
import { BotonStartComponent } from './components/boton-start/boton-start.component';
import { TemporizadorComponent } from './components/temporizador/temporizador.component';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-vista-inicio',
  standalone: true,
  imports: [BotonStartComponent, TemporizadorComponent, SidebarComponent],
  templateUrl: './vista-inicio.component.html',
  styleUrl: './vista-inicio.component.css',
})
export class VistaInicioComponent {
  toggleTimer: boolean = false;
  ToggleTimer(toggleInfoTimer: boolean) {
    this.toggleTimer = toggleInfoTimer;
  }
}
