import { Component } from '@angular/core';
import { NgOptimizedImage} from '@angular/common';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products];
  
  share(productName: string, productUrl: string) {
    window.open(`https://telegram.me/share/url?url=Welcome, you should buy ${productName} &text= on ${productUrl}`)  
  }

  onNotify(){
    window.alert("You will be notified when the products goes on sale");
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
