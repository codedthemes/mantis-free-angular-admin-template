// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// project import
import { CardComponent } from './card.component';

// bootstrap import
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, NgbDropdownModule],
  declarations: [CardComponent],
  exports: [CardComponent],
  providers: []
})
export class CardModule {}
