// Angular import
import { Component } from '@angular/core';

// project import

import { CardComponent } from 'src/app/theme/shared/components/card/card.component';

@Component({
  selector: 'app-color',
  imports: [CardComponent],
  templateUrl: './color.component.html',
  styleUrl: './color.component.scss'
})
export class ColorComponent {}
