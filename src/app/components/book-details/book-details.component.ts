import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { BooksService } from '../../services/books/books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  books = [];
  book;

  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService) {}


  getBooks() {
    this.booksService.getBooks()
      .subscribe(res => {
        this.books = res;
        this.getBook();
        return this.books;
      });
  }

  getBook() {
    this.route.paramMap.subscribe(params => {
      this.book = this.books[+params.get('bookId')];
    })
  }

  ngOnInit() {
    this.getBooks();
  }

}
