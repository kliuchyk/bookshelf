import { Component, OnInit } from '@angular/core';

import { BooksService } from '../../services/books/books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  books;

  constructor(private bookSerive: BooksService) {
  }

  deleteBook(book) {
    this.bookSerive.deleteBook(book);
  }

  getBooks() {
    this.bookSerive
      .getBooks()
      .subscribe(res => {
        this.books = res
      });
  }

  ngOnInit() {
    this.getBooks();
  }

}
