import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  standalone: false,
  templateUrl: './select.html',
  styleUrl: './select.css',
})
export class Select {
  @Input() title: string = '';
  @Input() data: any[] = [];
  selectedCat: string = 'all';
  @Output() catChange: EventEmitter<any> = new EventEmitter();

  filter() {
    this.catChange.emit(this.selectedCat);
  }
}
