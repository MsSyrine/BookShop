import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  public book: Book;


  constructor(private _BookService: BookService) {
     this.book = new Book(  0, 0 , '', '', '', '', 0, '', '', 0, '', '', '', '', );
    // tslint:disable-next-line:max-line-length
  }

  ngOnInit() {
  }

  onSubmitAddBook(form): void {
    console.log('book ' + this.book);
     this._BookService.AddBook(this.book);
      console.log('submitting a book ');
     // book.Reset();

  }
}
