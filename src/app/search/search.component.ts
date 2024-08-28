import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  @Output() searchChange = new EventEmitter<string>();

  textSearched:string = '';

  onInput() {
    console.log("SEARCH : ",`${this.textSearched}`);
    this.searchChange.emit(this.textSearched);
  }

  delOnClick(){
    this.textSearched = '';
    this.onInput();
  }

}
