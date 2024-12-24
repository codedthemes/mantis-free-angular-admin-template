// angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// project import

import { CardComponent } from 'src/app/theme/shared/components/card/card.component';

@Component({
  selector: 'app-sample-page',
  imports: [CommonModule, CardComponent],
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss']
})
export class SamplePageComponent {}
