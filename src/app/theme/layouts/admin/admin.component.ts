import { Component, NgZone } from '@angular/core';
import { MantisConfig } from 'src/app/app-config';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  navCollapsed;
  navCollapsedMob: boolean;
  windowWidth: number;

  constructor() {
    this.windowWidth = window.innerWidth;
    this.navCollapsed = this.windowWidth >= 1024 ? MantisConfig.isCollapseMenu : false;
    this.navCollapsedMob = false;
  }

  navMobClick() {
    if (this.navCollapsedMob && !document.querySelector('app-navigation.coded-navbar').classList.contains('mob-open')) {
      this.navCollapsedMob = !this.navCollapsedMob;
      setTimeout(() => {
        this.navCollapsedMob = !this.navCollapsedMob;
      }, 100);
    } else {
      this.navCollapsedMob = !this.navCollapsedMob;
    }
  }
}
