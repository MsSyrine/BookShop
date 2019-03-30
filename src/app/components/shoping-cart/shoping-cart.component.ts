import { AddCartService } from './../../services/add-cart.service';
import { Component, OnInit } from '@angular/core';
declare var  $: any;


@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.css']
})
export class ShopingCartComponent implements OnInit {
  public shoppingCart = [];
  public removeBooks: any;
  public total;
  public product: any;
  public shoppingCartLe: string;
  public shoppingCartlength;
  public key: string;

  constructor(
    public addCartService: AddCartService,
  ) {
  }

ngOnInit() {
    this.shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
}

 remove(removeBook) {
  for (let i = 0; i < this.shoppingCart.length; i++) {
     if (removeBook === this.shoppingCart[i]) {
      this.removeBooks  = this.shoppingCart.indexOf(removeBook);
      this.shoppingCart.splice(this.removeBooks, 1);
      this.key = 'shoppingCart';
      localStorage.setItem(this.key, JSON.stringify(this.shoppingCart));
     }
  }
 }

 getTotal() {
 this.total = 0;
  for (let i = 0; i < this.shoppingCart.length; i++) {
      this.total = this.total +  this.shoppingCart[i].ourPrice;
  }
  return this.total;
}
public Buy(shoppingCart) {

}



}
