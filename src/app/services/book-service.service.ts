import { Injectable } from '@angular/core';
import { Book } from '../models/Book';
import { BOOKS } from '../BOOKS-LIST';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  book: { ISBN: string; title: string; author: string; publisher: string; coverUrl: string; };
  //Book: any;

  constructor() { }
 
  getBooks(): Book[] {
    return BOOKS;
  }
  addBook(book: Book): void {
    BOOKS.push(book);
  }

}
