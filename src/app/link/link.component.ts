import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-link',
  template: `
    <div>
      <span *ngIf="isActive"><ng-content select="[inActive]"></ng-content></span>
      <span *ngIf="!isActive">
        <a href (click)="$event.preventDefault(); click.emit()"><ng-content select="[active]"></ng-content></a>
      </span>
    </div>
  `,
  styleUrls: ['./link.component.css']
})
export class LinkComponent {
  @Input() isActive: boolean;
  @Output() click: EventEmitter<void>;

  constructor() {
    this.click = new EventEmitter<void>();
  }
}
