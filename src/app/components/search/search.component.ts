 import { PetitionsService } from './../../services/petitions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [
     PetitionsService

  ]
})
export class SearchComponent implements OnInit {
  public book: any;
  public matches = [];
  public inputResult = '';
  public clickMessage = '';
  public values = '';

  constructor(
   private ps: PetitionsService
  ) { }

  onKey(value: string) {
    console.log(value);
  }
  ngOnInit() {
    this.ps.getBook().subscribe(
      result => {
       this.book = result;
       console.log(result);
      },
  );
  }

onClickMe(inputResult) {
  for (let i = 0; i < this.book.length; i++) {
    if (inputResult === this.book[i].title) {
   this.matches.push(this.book[i]);
        console.log(this.matches );
    } else if (inputResult !== this.book[i].title)  {
        console.log( 'Not Found');
    } else {
      console.log('ERROR!');
    }
  }
}
}
