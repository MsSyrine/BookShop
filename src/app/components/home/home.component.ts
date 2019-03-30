import { BookService } from './../../services/book.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Book } from 'src/app/models/Book';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    BookService
 ]
})
export class HomeComponent implements OnInit {
  books: Book[] = [];
  bestSell: any[];
  public name: string;

  constructor(private _BookService: BookService) {
    this.name = '';
 }

 ngOnInit() {
  this.getBooks();
  // this.BestSellers();
  // this.name = localStorage.getItem('UserName');
   }

  getBooks(): void {
    this._BookService.getBooks()
        .subscribe(books => this.books = books);
  }

 // Find best sellers
/* BestSellers(): void  {
  console.log('BestSellers Works!!!!');
  for (let i = 0; i < this.books.length; i++) {
    if (this.books[i].inStock < 15 ) {
      this.bestSell.push(this.books[i]);
    } else {
      console.log('Fatal error');
   }
  }
} */


}

