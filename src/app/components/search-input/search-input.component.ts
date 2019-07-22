import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GoogleBooksService } from 'src/app/services/books/googleBooks.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  books = [];

  @Output() messageEvent = new EventEmitter();

  constructor(private booksService: GoogleBooksService) { }

  sendMessage() {
    console.log(this.books);
    this.messageEvent.emit(this.books);
  }

  searchBooks(value) {
    this.booksService.getBooksFromGoogle(value)
      .subscribe((response: any) => this.books = response.items);

    this.sendMessage();
  }

  ngOnInit() {
  }

}
