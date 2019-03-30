import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {
  public login: boolean;
  public email: string;
  public password: string;
  public name: string;

  constructor(
    public authService: AuthService,
    public router: Router,
  ) {  }


public hideModal() {
    $('#modalLoginForm').modal('hide');
  }

  ngOnInit() {
  }

  onSubmitLogin() {
    this.authService.loginEmail(this.email, this.password).then( (res) => {
      this.hideModal();
      this.router.navigate(['/Home']);
    }).catch((err) => {
      console.log(err);
      this.router.navigate(['/Login']);
    });

  }
  signInWithFacebook() {
    this.authService.signInWithFacebook()
    .then((res) => {
        this.router.navigate(['/Home']);
      })
    .catch((err) => {console.log(err);
        this.router.navigate(['/Login']);
      });

  }

  signInWithTwitter() {
    this.authService.signInWithTwitter()
    .then((res) => {
        this.router.navigate(['/Home']);
      })
    .catch((err) => {console.log(err);
        this.router.navigate(['/Login']);
      });

  }

  signInWithGoogle() {
    this.authService.signInWithGoogle()
    .then((res) => {
        this.router.navigate(['/Home']);
      })
    .catch((err) => {console.log(err);
        this.router.navigate(['/Login']);
      });

  }

}
