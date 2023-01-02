// angular import
import { Component, Output, EventEmitter } from '@angular/core';
import { MantisConfig } from 'src/app/app-config';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  // public props
  @Output() onNavCollapse = new EventEmitter();
  @Output() onNavCollapsedMob = new EventEmitter();
  @Output() onCustomize = new EventEmitter();

  navCollapsed;
  windowWidth: number;
  navCollapsedMob;

  // Constructor
  constructor() {
    this.windowWidth = window.innerWidth;
    this.navCollapsed = this.windowWidth >= 1025 ? MantisConfig.isCollapseMenu : false;
    this.navCollapsedMob = false;
  }

  // public method
  navCollapse() {
    if (this.windowWidth >= 1025) {
      this.navCollapsed = !this.navCollapsed;
      this.onNavCollapse.emit();
    }
  }

  navCollapseMob() {
    if (this.windowWidth < 1025) {
      this.onNavCollapsedMob.emit();
    }
  }

  customize() {
    this.onCustomize.emit();
  }
}
