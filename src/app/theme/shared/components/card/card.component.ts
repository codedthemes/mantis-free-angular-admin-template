// Angular import
import { Component, ContentChild, ElementRef, Input, TemplateRef } from '@angular/core';
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
  /**
   * Title of card. It will be visible at left side of card header
   */
  @Input() cardTitle!: string;

  /**
   * Class to be applied at card level
   */
  @Input() cardClass!: string;

  /**
   * To hide content from card
   */
  @Input() showContent = true;

  /**
   * Class to be applied at card content.
   */
  @Input() blockClass!: string;

  /**
   * Class to be applied on card header
   */
  @Input() headerClass!: string;

  /**
   * To hide header from card
   */
  @Input() showHeader = true;

  /**
   * padding around card content. default in px
   */
  @Input() padding = 20; // set default to 24 px

  /**
   * Template reference of header actions on custom header
   */
  @ContentChild('headerOptionsTemplate') headerOptionsTemplate!: TemplateRef<ElementRef>;

  /**
   * Template reference of header actions besides title at left
   */
  @ContentChild('headerTitleTemplate') headerTitleTemplate!: TemplateRef<ElementRef>;
}
