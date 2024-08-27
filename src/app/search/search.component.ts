import {Component, input} from '@angular/core';
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

  textSearched:string = 'Default';

  onInput() {
    console.log(`${this.textSearched}`);
  }

  delOnClick(){
    this.textSearched = '';
    this.onInput();
  }

}
