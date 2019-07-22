import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SearchInputComponent } from '../search-input/search-input.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  books = [];

  constructor() { }

  receiveMessage(event) {
    console.log(event);
    this.books = event;
  }

  ngOnInit() {
  }

}
