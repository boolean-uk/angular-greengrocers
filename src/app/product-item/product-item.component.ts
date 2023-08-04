import { Component, EventEmitter, Output } from '@angular/core';
import { Product, ProductService } from '../product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  productList: Product[] | null = null;
  @Output() productsInCartUpdated: EventEmitter<Map<Product, number>> = new EventEmitter();

  constructor(private productService: ProductService) {
    this.getProducts();
  }

  async getProducts() {
    this.productList = await this.productService.getProducts();
  }

  async increaseInCart(product: Product) {
    this.productService.increaseInCart(product);
    this.productsInCartUpdated.emit(this.productService.productsInCart);
  }

  async addToCart(product: Product) {
    this.productService.addToCart(product);
    this.productsInCartUpdated.emit(this.productService.productsInCart);
  }

  
}
