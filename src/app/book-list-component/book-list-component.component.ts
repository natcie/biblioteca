import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../services/book-service.service';
import { Book } from '../models/Book';

@Component({
  selector: 'app-book-list-component',
  templateUrl: './book-list-component.component.html',
  styleUrls: ['./book-list-component.component.css']
})
export class BookListComponentComponent implements OnInit {
  title: string = 'Lista libri';
  books: Book[];
  constructor(private service: BookServiceService) { }

  ngOnInit(): void {
    this.books = this.service.getBooks();
  }

}
