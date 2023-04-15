import { Component } from '@angular/core';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent {
  quantity1: number = 0;
  quantity2: number = 0;
  increase() {
      this.quantity1++;
      this.quantity2++;

  }
  decrease() {
      if (this.quantity1 > 0) {
        this.quantity1--;
      }
      if (this.quantity2 > 0) {
        this.quantity2--;
      }
  }
}
