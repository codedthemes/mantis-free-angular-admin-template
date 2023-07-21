import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export default class CardComponent {}
