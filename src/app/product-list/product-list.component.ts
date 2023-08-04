import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  productList: any | null = null;

  constructor(private productService : ProductService){
    this.getCart()
  }

  async getCart(){
    this.productList = await this.productService.getProducts();
  }


}
