// Angular import
import { Component, Input, output } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// project import
import { NavigationItem } from '../../navigation';

import { NavItemComponent } from '../nav-item/nav-item.component';
import { IconDirective } from '@ant-design/icons-angular';

@Component({
  selector: 'app-nav-collapse',
  imports: [CommonModule, IconDirective, RouterModule, NavItemComponent],
  templateUrl: './nav-collapse.component.html',
  styleUrls: ['./nav-collapse.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', display: 'block' }),
        animate('250ms ease-in', style({ transform: 'translateY(0%)' }))
      ]),
      transition(':leave', [animate('250ms ease-in', style({ transform: 'translateY(-100%)' }))])
    ])
  ]
})
export class NavCollapseComponent {
  // public props

  // Compact Menu in use For Sub Child Open in sidebar menu
  showCollapseItem = output();

  // all Version Get Item(Component Name Take)
  @Input() item!: NavigationItem;

  windowWidth: number;

  // Constructor
  constructor() {
    this.windowWidth = window.innerWidth;
  }

  // public method
  navCollapse(e: MouseEvent) {
    let parent = e.target as HTMLElement;

    if (parent?.tagName === 'SPAN') {
      parent = parent.parentElement!;
    }

    parent = (parent as HTMLElement).parentElement as HTMLElement;

    const sections = document.querySelectorAll('.coded-hasmenu');
    for (let i = 0; i < sections.length; i++) {
      if (sections[i] !== parent) {
        sections[i].classList.remove('coded-trigger');
      }
    }

    let first_parent = parent.parentElement;
    let pre_parent = ((parent as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement;
    if (first_parent?.classList.contains('coded-hasmenu')) {
      do {
        first_parent?.classList.add('coded-trigger');
        first_parent = ((first_parent as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement;
      } while (first_parent.classList.contains('coded-hasmenu'));
    } else if (pre_parent.classList.contains('coded-submenu')) {
      do {
        pre_parent?.parentElement?.classList.add('coded-trigger');
        pre_parent = (((pre_parent as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement;
      } while (pre_parent.classList.contains('coded-submenu'));
    }
    parent.classList.toggle('coded-trigger');
  }

  // for Compact Menu
  subMenuCollapse(item: void) {
    this.showCollapseItem.emit(item);
  }
}
