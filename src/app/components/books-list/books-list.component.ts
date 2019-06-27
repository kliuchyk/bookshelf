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
        title: 'Of mice and men',
        author: 'Steinbeck',
        status: '',
      },
      {
        title: 'East of Edem',
        author: 'Steinbeck',
        status: '',
      },
      {
        title: 'Cannery row',
        author: 'Steinbeck',
        status: '',
      },
      {
        title: 'Code: The Hidden Language of Computer Hardware and Software',
        author: 'Charles Petzold',
        status: '',
      },
    ];
  }

  ngOnInit() {
  }

}
