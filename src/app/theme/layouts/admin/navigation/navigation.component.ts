// Angular import
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  // public props
  @Output() onNavCollapsedMob = new EventEmitter();
  @Output() onSubmenuCollapse = new EventEmitter();
  navCollapsedMob;
  windowWidth: number;
  subMenuCollapsed: boolean;
  themeLayout: string;

  // Constructor
  constructor() {
    this.windowWidth = window.innerWidth;
    this.navCollapsedMob = false;
  }

  // public method
  navCollapseMob() {
    if (this.windowWidth < 1025) {
      this.onNavCollapsedMob.emit();
    }
  }

  navSubmenuCollapse() {
    this.onSubmenuCollapse.emit();
  }
}
