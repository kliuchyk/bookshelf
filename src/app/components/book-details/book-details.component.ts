import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookDetailsComponent implements OnInit {

  @Input() book: {};

  constructor() {}

  ngOnInit() {
  }

}
