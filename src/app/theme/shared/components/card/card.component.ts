// Angular import
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  // public props
  @Input() cardTitle: string;
  @Input() cardClass!: string;
  @Input() blockClass!: string;
  @Input() headerClass!: string;
  @Input() hidHeader: boolean;

  // Constructor
  constructor() {
    this.hidHeader = false;
    this.cardTitle = 'Card Title';
  }
}
