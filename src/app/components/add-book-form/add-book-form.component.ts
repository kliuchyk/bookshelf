import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { BooksService} from '../../services/books/books.service';

@Component({
  selector: 'app-add-book-form',
  templateUrl: './add-book-form.component.html',
  styleUrls: ['./add-book-form.component.scss']
})
export class AddBookFormComponent implements OnInit {

  constructor(private bookSerive: BooksService) {}

  // TODO - move to separete file
  bookListOptions = [
    {
      name: 'toRead',
      displayName: 'To Read'
    },
    {
      name: 'inProgress',
      displayName: 'In Progress'
    },
    {
      name: 'read',
      displayName: 'Read'
    }
  ];

  form = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    list: new FormControl(''),
  })

  onSubmit() {
    this.bookSerive.addBook(this.form.getRawValue());
    this.form.reset();
  }

  ngOnInit() {
  }

}
