import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-button-delete',
  standalone: true,
  imports: [],
  templateUrl: './button-delete.component.html',
  styleUrl: './button-delete.component.css'
})
export class ButtonDeleteComponent {

  @Output() clickedToDelete = new EventEmitter();
  

  onClickDelete() {
  this.clickedToDelete.emit();
  }


}
