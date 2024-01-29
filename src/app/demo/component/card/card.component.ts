// angular import
import { Component } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export default class CardComponent {}
