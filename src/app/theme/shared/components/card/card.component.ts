// Angular import
import { Component, ContentChild, ElementRef, TemplateRef, input } from '@angular/core';
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
  cardTitle = input<string>();

  /**
   * Class to be applied at card level
   */
  cardClass = input<string>();

  /**
   * To hide content from card
   */
  showContent = input(true);

  /**
   * Class to be applied at card content.
   */
  blockClass = input<string>();

  /**
   * Class to be applied on card header
   */
  headerClass = input<string>();

  /**
   * To hide header from card
   */
  showHeader = input(true);

  /**
   * padding around card content. default in px
   */
  padding = input(20); // set default to 24 px

  /**
   * Template reference of header actions on custom header
   */
  @ContentChild('headerOptionsTemplate') headerOptionsTemplate!: TemplateRef<ElementRef>;

  /**
   * Template reference of header actions besides title at left
   */
  @ContentChild('headerTitleTemplate') headerTitleTemplate!: TemplateRef<ElementRef>;
}
