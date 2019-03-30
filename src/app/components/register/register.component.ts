import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public email: string;
  public password: string;
  public nombre: string;
  public UserName: string;

  constructor(
    public authService: AuthService,
    public router: Router,
  ) { }
  public hideModal() {
    $('#modalRegisterForm').modal('hide');
 }

  ngOnInit() {
  }
  onKey(value) {
    console.log(this.nombre);
    this.UserName = 'UserName';
    localStorage.setItem(this.UserName, this.nombre);
    console.log(localStorage);
  }


  onSubmitAddUser() {
    this.authService.registerUser(this.email, this.password).then( (res) => {
      console.log('Works!!!!!!!');
      console.log(res);
      console.log(this.nombre);

      this.hideModal();
      this.router.navigate(['/Home', this.nombre]);
      console.log(localStorage);
    }).catch((err) => {
      console.log(err);
    });
  }
}


