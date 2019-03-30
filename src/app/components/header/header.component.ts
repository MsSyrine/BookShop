import { AddCartService } from './../../services/add-cart.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { auth } from 'firebase';

declare var $: any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public isLogin: boolean;
  public userName: string;
  public userEmail: string;
  public shoppingCartLe: string;
  public shoppingCartlength;

 constructor(
  public authService: AuthService,
  public addCartService: AddCartService,
 ) {

 }
 ngOnInit() {
   // tslint:disable-next-line:no-shadowed-variable
   this.authService.getAuth().subscribe ( auth => {
     if ( auth ) {
       this.isLogin = true;
       this.userName = auth.displayName;
       this.userEmail = auth.email;
     } else {
      this.isLogin = false;
     }
   });
 }

 getQ() {
  this.shoppingCartLe = JSON.parse(localStorage.getItem('shoppingCart'));
  this.shoppingCartlength = this.shoppingCartLe.length;
  return this.shoppingCartlength;
 }


 onclickLogout() {
   this.authService.logout();
   console.log('LOGOUT');
 }

}
