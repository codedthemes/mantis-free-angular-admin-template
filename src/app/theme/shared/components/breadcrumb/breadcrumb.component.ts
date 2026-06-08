// Angular import
import { Component, input, inject, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NavigationEnd, Router, RouterModule, Event } from '@angular/router';

// Project import
import { NavigationItem, NavigationItems } from 'src/app/theme/layouts/admin-layout/navigation/navigation';

// Icons
import { IconService } from '@ant-design/icons-angular';
import { GlobalOutline, NodeExpandOutline } from '@ant-design/icons-angular/icons';

interface titleType {
  url: string | boolean | undefined;
  title: string;
  breadcrumbs: unknown;
  type: string;
  link?: string | undefined;
  description?: string | undefined;
  path?: string | undefined;
}

@Component({
  selector: 'app-breadcrumb',
  imports: [RouterModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbComponent {
  private route = inject(Router);
  private iconService = inject(IconService);
  private cdr = inject(ChangeDetectorRef);

  // public props
  type = input<string>('theme1');
  readonly dashboard = input(true);
  readonly Component = input(false);

  navigations: NavigationItem[];
  breadcrumbList: Array<string> = [];
  navigationList!: titleType[];
  componentList!: titleType[];

  // Constructor
  constructor() {
    this.navigations = NavigationItems;
    this.setBreadcrumb();
    this.iconService.addIcon(...[GlobalOutline, NodeExpandOutline]);
  }

  // Public method
  setBreadcrumb() {
    // Process the current route immediately on initial load
    this.updateBreadcrumb(this.route.url);

    // Subscribe to future navigation events
    this.route.events.subscribe((router: Event) => {
      if (router instanceof NavigationEnd) {
        this.updateBreadcrumb(router.url);
      }
    });
  }

  updateBreadcrumb(activeLink: string) {
    const activeItem = this.filterNavigation(this.navigations, activeLink);

    // Clear previous values to avoid showing stale data
    this.navigationList = [];

    // Prioritize componentItem over activeItem when both exist
    // Component navigation has richer data (description, path, link)
    if (activeItem) {
      this.navigationList = [activeItem];
    }
    this.cdr.markForCheck();
  }

  filterNavigation(navItems: NavigationItem[], activeLink: string): titleType | null {
    for (const navItem of navItems) {
      if (navItem.type === 'item' && 'url' in navItem && navItem.url === activeLink) {
        return {
          url: navItem.url || true,
          title: navItem.title,
          link: navItem.link,
          description: navItem.description,
          path: navItem.path,
          breadcrumbs: 'breadcrumbs' in navItem ? navItem.breadcrumbs : true,
          type: navItem.type
        };
      }
      if ((navItem.type === 'group' || navItem.type === 'collapse') && 'children' in navItem) {
        const activeItem = this.filterNavigation(navItem.children!, activeLink);
        if (activeItem) {
          return activeItem; // Return the child if found
        }
      }
    }
    return null; // Return null if no active item matches
  }

  isLink(url: string | boolean | undefined): url is string {
    return typeof url === 'string';
  }
}