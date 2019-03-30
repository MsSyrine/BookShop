import { AddCartService } from './../../services/add-cart.service';
import { BookService } from './../../services/book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [
    BookService,
  ]
})
export class BookComponent implements OnInit {
  books: Book[];
  modalDis: any[];
  sellBook: any[] = [];
  key: string;
  show = true;
  public inputResult = '';
  DisplayBooks: boolean;
  matches: any[];


  constructor(private _BookService: BookService) {
  }
  ngOnInit() {
    this.getBooks();
    this.DisplayBooks = true;
  }

  getBooks(): void {
    this._BookService.getBooks()
        .subscribe(books => this.books = books);
  }

 // Show book Modal
 DisplayInModal(bookID) {
  console.log('modal Works');
  for (let i = 0; i < this.books.length; i++) {
    if (this.books[i].id === bookID) {
      this.modalDis = [];
      this.modalDis.push(this.books[i]);
     // console.log(this.modalDis);
    } else {
      console.log('Fatal error');
    // console.log(this.modalDis);
   }
  }
}

 // Show not found option
 demoDisplay() {
  document.getElementById('GetAlert').style.display = 'block';
}

// Search Result
searchBook(inputResult): void {
  // this.matches = [];
   this._BookService.getBooks()
        .subscribe(books => this.books = books);

      }



onKey(value: string) {
  console.log(value);
}

// Testing form submit
onSubmit() {
  console.log('Form Submitted!');
}

// take the selected book
 getTheBook(bookID) {
  console.log(bookID);
  this.sellBook.push(bookID);
  this.key = 'shoppingCart';
  localStorage.setItem(this.key,  JSON.stringify(this.sellBook));
}





}
