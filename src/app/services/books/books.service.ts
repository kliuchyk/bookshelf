import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private firestore: AngularFirestore) { }

  addBook(book) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("allBooks")
        .add(book);
    });
  }

  getBooks() {
    return this.firestore
      .collection("allBooks").snapshotChanges();
  }

  deleteBook(book) {
    return this.firestore
    .collection('allBooks')
    .doc(book.payload.doc.id)
    .delete();
  }

}
