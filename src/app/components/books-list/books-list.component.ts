import { Component, OnInit } from '@angular/core';

import { BooksService } from '../../services/books/books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  books = [];

  constructor(private booksService: BooksService) {
    this.getBooks();
  }

  deleteBook(book) {
    this.booksService.deleteBook(book);
  }

  getBooks() {
    this.booksService
      .getBooks().subscribe(res => this.books = res);
  }

  ngOnInit() {
  }

}
