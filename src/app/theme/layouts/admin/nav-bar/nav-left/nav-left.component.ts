// Angular import
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-left',
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.scss']
})
export class NavLeftComponent {
  // public props
  @Input() navCollapsed: boolean;
  @Output() onNavCollapse = new EventEmitter();
  @Output() onNavCollapsedMob = new EventEmitter();
  windowWidth: number;

  // Constructor
  constructor() {
    this.windowWidth = window.innerWidth;
  }

  // public method
  navCollapse() {
    this.onNavCollapse.emit();
  }
}
