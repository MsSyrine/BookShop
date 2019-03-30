import { ContactUsers } from './../../models/ContactUsers';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contactUser: ContactUsers;


  constructor() {
  this.contactUser = new ContactUsers('', '', '', '');
  }

  ngOnInit() {
  }
  onSubmit(form) {

    form.reset();
    console.log('submitting a msg!');
    console.log(this.contactUser);
  }
}
