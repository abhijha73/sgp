import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss'],
})
export class CounterButtonsComponent {
  @Output() incrementEmitter = new EventEmitter();
  @Output() resetEmitter = new EventEmitter();
  @Output() decrementEmitter = new EventEmitter();
  onIncrement() {
    this.incrementEmitter.emit();
  }
  onReset() {
    this.resetEmitter.emit();
  }
  onDecrement() {
    this.decrementEmitter.emit();
  }
}
