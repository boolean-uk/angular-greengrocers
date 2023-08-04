import { Component, Input } from '@angular/core';
import { Product, ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  productList: Product[] = [];
  totalCost: number = 0;
  constructor(public productService: ProductService) {
    this.getProducts();
  }
    async ngOnInit() {
    await this.getTotalCost();
    // console.log('Products in Cart component',this.productService.productsInCart)
  }
  
  async getProducts() {
    this.productList = await this.productService.getProducts();
  }

  async increaseInCart(product: Product) {
    this.productService.increaseInCart(product);
    console.log(product.name, this.productService.productsInCart.get(product))
    this.getTotalCost()
  }

  async decreaseInCart(product: Product) {
    this.productService.decreaseInCart(product);
    this.getTotalCost()
    console.log(product.name, this.productService.productsInCart.get(product))
  }

  private async getTotalCost() {
    this.totalCost = await this.productService.getTotalCost(this.productList);
  }
  updateProductsInCart(productsInCart: Map<Product, number>) {
    this.productService.productsInCart = productsInCart;
  }
}
