import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  @ViewChild('container') sidebar!: ElementRef;
  toggle: boolean = false;

  faBars = faBars;
  ngOnInit(): void {}

  ToggleSideBar() {
    this.toggle = !this.toggle;
    if (this.toggle) {
      this.sidebar.nativeElement.style.width = '250px';
    } else {
      this.sidebar.nativeElement.style.width = '0px';
    }
  }
}
