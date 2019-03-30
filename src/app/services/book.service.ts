import { NgForm } from '@angular/forms';
import { Book } from 'src/app/models/Book';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  headers: HttpHeaders;

  constructor(private httpClient: HttpClient ) {
  }

getBooks(): Observable<Book[]> {
  return this.httpClient.get<Book[]>('http://localhost:8080/books');  }

searchBooks(Title): Observable<Book[]>  {
console.log('http://localhost:8080//searchBookTitle?mc=' + Title);
return this.httpClient.get<Book[]>('http://localhost:8080//searchBookTitle?mc=' + Title);  }



     AddBook(book): void  {
    this.httpClient.post('http://localhost:8080/submitBooks',
        {
            'id': book.id,
            'author': book.author,
            'title': book.title,
            'photo': book.photo,
            'Ofpages': book.Ofpages,
            'description': book.description
        })
        .subscribe(
            data => {
                console.log('POST Request is successful ', data);
            },
            error => {
                console.log('Error', error);
            }
        );
        }

    deleteBook(book: Book): void {
      //  throw new Error("Method not implemented.");
      console.log('delete id is  ', book.id);
      this.httpClient.delete('http://localhost:8080/books/' + book.id)
      .subscribe(
          data => {
              console.log('delete Request is successful ', data);
          },
          error => {
              console.log('Error', error);
          }
      );
      }

  }
