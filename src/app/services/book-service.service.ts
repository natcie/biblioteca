import { Injectable } from '@angular/core';
import { Book } from '../models/Book';
import { BOOKS } from '../BOOKS-LIST';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor() { }
 
  getBooks(): Book[] {
    return BOOKS;
  }
  addBook(book: Book): void {
  }

}
