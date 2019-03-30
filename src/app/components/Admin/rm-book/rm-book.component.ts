import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-rm-book',
  templateUrl: './rm-book.component.html',
  styleUrls: ['./rm-book.component.css']
})
export class RmBookComponent implements OnInit {
  public book: Book;


  constructor(private _BookService: BookService) {
     this.book = new Book(  0, 0 , '', '', '', '', 0, '', '', 0, '', '', '', '', );
    // tslint:disable-next-line:max-line-length
  }

  ngOnInit() {
  }



  onSubmitDeleteBook(book) {
    console.log(this.book.id);
    this._BookService.deleteBook(this.book);
    console.log('deleting a book!');
  }

}
