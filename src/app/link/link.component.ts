import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-link',
  template: `
    <div>
      <ng-content
        select="[active]"
        *ngIf="isActive"></ng-content>
      <a
        href
        (click)="$event.preventDefault(); linkClicked.emit()"
        *ngIf="!isActive">
        <ng-content select="[inActive]"></ng-content>
      </a>
    </div>
  `,
  styleUrls: ['./link.component.css']
})
export class LinkComponent {
  @Input() isActive: boolean;
  @Output() linkClicked: EventEmitter<void>;

  constructor() {
    this.linkClicked = new EventEmitter<void>();
  }
}
