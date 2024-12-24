// Angular import
import { CommonModule } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';

// project import

// icons
import { IconService, IconDirective } from '@ant-design/icons-angular';
import { MenuUnfoldOutline, MenuFoldOutline, SearchOutline } from '@ant-design/icons-angular/icons';

@Component({
  selector: 'app-nav-left',
  imports: [IconDirective, CommonModule],
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.scss']
})
export class NavLeftComponent {
  private iconService = inject(IconService);

  // public props
  navCollapsed = input.required<boolean>();
  NavCollapse = output();
  NavCollapsedMob = output();
  windowWidth: number;

  // Constructor
  constructor() {
    this.windowWidth = window.innerWidth;
    this.iconService.addIcon(...[MenuUnfoldOutline, MenuFoldOutline, SearchOutline]);
  }

  // public method
  navCollapse() {
    this.NavCollapse.emit();
  }
}
