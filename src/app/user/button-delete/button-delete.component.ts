import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-button-delete',
  templateUrl: './button-delete.component.html',
  styleUrl: './button-delete.component.css'
})
export class ButtonDeleteComponent {

  @Output() clickedToDelete = new EventEmitter<void>();


  onClickDelete() {
  this.clickedToDelete.emit();
  }


}
