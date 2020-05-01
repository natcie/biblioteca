import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../services/book-service.service';
import { Book } from '../models/Book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  title: string = 'Aggiungi un libro....';
  books: Book[];
  newBook: Book;
  selectedBook: Book;

  constructor(private service: BookServiceService) { }

  ngOnInit(): void {
    this.books = this.service.getBooks();
  }
  addThisBook(newBook: Book){
    this.service.addBook(this.newBook);
    this.books.push(this.newBook);
    this.newBook = {
      ISBN: '',
      title: '',
      author: '',
      publisher: '',
      coverUrl:''
    }

  }
}
