import { Component, OnInit } from '@angular/core';
import { GoogleService } from 'src/app/services/books/googleBooks.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  books = [];

  constructor(private booksService: GoogleService) { }

  searchBooks(value) {
    this.booksService.getBooksFromGoogle(value)
      .subscribe((response: any) => {
        return this.books = response.items;
      });
  }

  ngOnInit() {
  }

}
