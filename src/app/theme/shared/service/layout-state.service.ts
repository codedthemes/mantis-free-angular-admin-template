import { Injectable, signal } from '@angular/core';

/**
 * Central layout state for coordinating mobile sidebar open/close.
 */
@Injectable({ providedIn: 'root' })
export class LayoutStateService {
  // true when the mobile sidebar should be open
  readonly navCollapsedMob = signal(false);

  toggleNavCollapsedMob() {
    this.navCollapsedMob.update((isOpen) => !isOpen);
  }

  openNavCollapsedMob() {
    this.navCollapsedMob.set(true);
  }

  closeNavCollapsedMob() {
    this.navCollapsedMob.set(false);
  }
}
