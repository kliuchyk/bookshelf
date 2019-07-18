import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  constructor(private http: HttpClient) { }

  getBooksFromGoogle(value: string) {
      if (value) {
        return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${value}`)
      }
  }
}
