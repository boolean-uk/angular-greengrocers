import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {}

  products: Product[] = [];
  productsInCart = new Map<Product, number>();


  async getProducts(): Promise<Product[]> {
    const response = await firstValueFrom(this.http.get<Product[]>(`${environment.apiUrl}`));
    this.products = response

    this.products.forEach(product => {
      this.productsInCart.set(product, 0);
    });

    console.log('res', response);
    return response;
  }

  async addToCart(toAdd : Product){
    this.productsInCart.set(toAdd,1)
  }
  
  async increaseInCart(toIncrease: Product) {
    const currentQuantity = this.productsInCart.get(toIncrease) ?? 0;
    const newQuantity = currentQuantity + 1;
    this.productsInCart.set(toIncrease, newQuantity);
  }
  
  async decreaseInCart(toDecrease: Product) {
    const currentQuantity = this.productsInCart.get(toDecrease) ?? 0;

    const newQuantity = currentQuantity -1
    if (newQuantity >= 0){
      currentQuantity  - 1;
      this.productsInCart.set(toDecrease, newQuantity);
    }
    else if (newQuantity <= 0){
      this.productsInCart.delete(toDecrease)
    }
  }

  
  async getTotalCost(products: Product[]) {
    let totalPrice = 0;

    this.products.forEach(product => {
      const selectedProduct = this.productsInCart.get(product) ?? 0;
      totalPrice += product.price*selectedProduct
    });
    return parseFloat(totalPrice.toFixed(2));
  }  
}

export interface Product {
  id: number;
  name: string;
  type: string;
  price: number;
}
