// Angular import
import { Component, input, output, inject } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

// icons
import { IconService } from '@ant-design/icons-angular';
import { MenuUnfoldOutline, MenuFoldOutline, SearchOutline } from '@ant-design/icons-angular/icons';

@Component({
  selector: 'app-nav-left',
  imports: [SharedModule],
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.scss']
})
export class NavLeftComponent {
  private iconService = inject(IconService);

  // public props
  readonly navCollapsed = input.required<boolean>();
  readonly NavCollapse = output();
  readonly NavCollapsedMob = output();
  // Constructor
  constructor() {
    this.iconService.addIcon(...[MenuUnfoldOutline, MenuFoldOutline, SearchOutline]);
  }

  // public method
  navCollapse() {
    this.NavCollapse.emit();
  }

  navCollapsedMob() {
    this.NavCollapsedMob.emit();
  }
}
