import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  books: any[];

  constructor() {
    this.books = [
      {
        title: 'Peace and War',
        author: 'Lev Tolstoy',
        status: '',
      },
      {
        title: 'East of Edem',
        author: 'Steinbeck',
        status: '',
      },
      {
        title: 'Grape of Wrath',
        author: 'Steinbeck',
        status: '',
      },
    ];
  }

  ngOnInit() {
  }

}
