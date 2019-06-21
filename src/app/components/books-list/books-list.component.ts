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
      {title: 'Peace and War'},
      {title: 'East of Edem'},
      {title: 'Grape of Wrath'},
    ];
  }

  ngOnInit() {
  }

}
