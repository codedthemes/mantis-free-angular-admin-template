// Angular import
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, AUTO_STYLE, state, style, transition, trigger } from '@angular/animations';

// bootstrap import
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  providers: [NgbDropdownConfig],
  animations: [
    trigger('collapsedCard', [
      state(
        'collapsed, void',
        style({
          overflow: 'hidden',
          height: '0px'
        })
      ),
      state(
        'expanded',
        style({
          overflow: 'hidden',
          height: AUTO_STYLE
        })
      ),
      transition('collapsed <=> expanded', [animate('400ms ease-in-out')])
    ]),
    trigger('cardRemove', [
      state(
        'open',
        style({
          opacity: 1
        })
      ),
      state(
        'closed',
        style({
          opacity: 0,
          display: 'none'
        })
      ),
      transition('open <=> closed', animate('400ms'))
    ])
  ]
})
export class CardComponent implements OnInit {
  // public props
  @Input() cardTitle: string;
  @Input() cardClass!: string;
  @Input() blockClass!: string;
  @Input() headerClass!: string;
  @Input() options: boolean;
  @Input() hidHeader: boolean;
  @Input() customHeader: boolean;
  @Input() customDate: boolean;
  @Input() CardDate!: string;

  animation!: string;
  fullIcon: string;
  isAnimating: boolean;
  collapsedCard: string;
  collapsedIcon: string;
  loadCard: boolean;
  cardRemove: string;

  // Constructor
  constructor(config: NgbDropdownConfig) {
    config.placement = 'bottom-right';
    this.customHeader = false;
    this.customDate = false;
    this.options = true;
    this.hidHeader = false;
    this.cardTitle = 'Card Title';
    this.fullIcon = 'icon-maximize';
    this.isAnimating = false;

    this.collapsedCard = 'expanded';
    this.collapsedIcon = 'icon-minus';

    this.loadCard = false;

    this.cardRemove = 'open';
  }

  // Life cycle events
  ngOnInit() {
    if (!this.options || this.hidHeader || this.customHeader) {
      this.collapsedCard = 'false';
    }
    if (!this.options || this.hidHeader || this.customDate) {
      this.collapsedCard = 'false';
    }
  }

  // public method
  fullCardToggle(element: HTMLElement, animation: string, status: boolean) {
    animation = this.cardClass === 'full-card' ? 'zoomOut' : 'zoomIn';
    this.fullIcon = this.cardClass === 'full-card' ? 'icon-maximize' : 'icon-minimize';
    this.cardClass = this.cardClass === 'full-card' ? this.cardClass : 'full-card';
    if (status) {
      this.animation = animation;
    }
    this.isAnimating = true;

    setTimeout(() => {
      this.cardClass = animation === 'zoomOut' ? '' : this.cardClass;
      if (this.cardClass === 'full-card') {
        (document.querySelector('body') as HTMLBodyElement).style.overflow = 'hidden';
      } else {
        (document.querySelector('body') as HTMLBodyElement).removeAttribute('style');
      }
    }, 500);
  }

  collapsedCardToggle() {
    this.collapsedCard = this.collapsedCard === 'collapsed' ? 'expanded' : 'collapsed';
    this.collapsedIcon = this.collapsedCard === 'collapsed' ? 'icon-plus' : 'icon-minus';
  }

  cardRefresh() {
    this.loadCard = true;
    this.cardClass = 'card-load';
    setTimeout(() => {
      this.loadCard = false;
      this.cardClass = 'expanded';
    }, 3000);
  }

  cardRemoveAction() {
    this.cardRemove = this.cardRemove === 'closed' ? 'open' : 'closed';
  }
}
