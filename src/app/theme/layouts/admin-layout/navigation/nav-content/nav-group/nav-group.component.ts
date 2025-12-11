// Angular import
import { Component, OnInit, input, output, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';

// project import
import { NavigationItem } from '../../navigation';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NavCollapseComponent } from '../nav-collapse/nav-collapse.component';
import { NavItemComponent } from '../nav-item/nav-item.component';

@Component({
  selector: 'app-nav-group',
  imports: [CommonModule, SharedModule, NavCollapseComponent, NavItemComponent],
  templateUrl: './nav-group.component.html',
  styleUrls: ['./nav-group.component.scss']
})
export class NavGroupComponent implements OnInit {
  private location = inject(Location);

  // public props

  // All Version in Group Name
  readonly item = input.required<NavigationItem>();
  // for Compact Menu
  readonly showCollapseItem = output<NavigationItem>();

  current_url!: string;

  // Life cycle events
  ngOnInit() {
    this.current_url = this.location.path();
    //eslint-disable-next-line
    //@ts-ignore
    const baseHref = this.location['_baseHref'] || '';
    this.current_url = baseHref + this.current_url;

    // Use a more reliable way to find and update the active group
    setTimeout(() => {
      const links = document.querySelectorAll('a.nav-link') as NodeListOf<HTMLAnchorElement>;
      links.forEach((link: HTMLAnchorElement) => {
        if (link.getAttribute('href') === this.current_url) {
          this.activateParentMenu(link);
        }
      });
    }, 0);
  }

  // Activate parent elements based on matched URL
  activateParentMenu(element: HTMLAnchorElement) {
    let parent = element.parentElement;
    while (parent && parent.classList) {
      if (parent.classList.contains('coded-hasmenu')) {
        parent.classList.add('coded-trigger');
        parent.classList.add('active');
      }
      parent = parent.parentElement;
    }
  }

  subMenuCollapse(item: NavigationItem) {
    this.showCollapseItem.emit(item);
  }
}
