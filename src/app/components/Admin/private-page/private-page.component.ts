import { RegisterComponent } from './../../register/register.component';
import { BookService } from './../../../services/book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-private-page',
  templateUrl: './private-page.component.html',
  styleUrls: ['./private-page.component.css']
})
export class PrivatePageComponent implements OnInit {
  public book: Book;


  constructor(private _BookService: BookService) {
    this.book = new Book(  0, 0 , '', '', '', '', 0, '', '', 0, '', '', '', '' );
    // tslint:disable-next-line:max-line-length
  }

  ngOnInit() {
  }


}
