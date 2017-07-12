import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-link',
  template: `
    <app-link
      [isActive]="isSelected"
      (linkClicked)="filterSelected.emit()">
      <span active>{{displayName}}</span>
      <span inActive>{{displayName}}</span>
    </app-link>
  `,
  styleUrls: ['./filter-link.component.css']
})
export class FilterLinkComponent {
  @Input() displayName: string;
  @Input() isSelected: boolean;
  @Output() filterSelected: EventEmitter<void>;

  constructor() {
    this.filterSelected = new EventEmitter<void>();
  }
}
