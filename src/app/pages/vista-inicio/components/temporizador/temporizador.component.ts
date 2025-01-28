import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-temporizador',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './temporizador.component.html',
  styleUrl: './temporizador.component.css',
})
export class TemporizadorComponent implements OnChanges {
  @Input() toggleTimer: boolean = false;

  totalSeconds: number = 25 * 60; // 25 minutos en segundos
  formattedTime: string = '25:00'; // Tiempo inicial formateado
  miIntervalo: any;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['toggleTimer']) {
      this.ToggleTemporizador(changes['toggleTimer'].currentValue);
    }
  }

  ToggleTemporizador(toggle: boolean) {
    if (toggle) {
      this.startTimer();
    } else {
      this.stopTimer();
    }
  }

  startTimer() {
    this.miIntervalo = setInterval(() => {
      if (this.totalSeconds > 0) {
        this.totalSeconds--;
        this.formattedTime = this.formatTime(this.totalSeconds);
      } else {
        this.stopTimer(); // Detén el temporizador cuando llegue a 0
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.miIntervalo);
  }

  formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const minutesStr = String(minutes).padStart(2, '0');
    const secondsStr = String(remainingSeconds).padStart(2, '0');

    return `${minutesStr}:${secondsStr}`;
  }
}
