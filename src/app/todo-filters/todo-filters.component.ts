import { Component } from '@angular/core';

@Component({
  selector: 'todo-filters',
  template: `
    <ul>
      <li>
        <filter-link filter="all"></filter-link>
      </li>
      <li>
        <filter-link filter="open"></filter-link>
      </li>
      <li>
        <filter-link filter="completed"></filter-link>
      </li>
    </ul>
  `,
  styleUrls: ['./todo-filters.component.css']
})
export class TodoFiltersComponent {}
