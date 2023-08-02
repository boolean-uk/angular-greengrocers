import {Component, OnInit} from '@angular/core';
import {ItemService} from "../services/item.service";
import {Item} from "../models/item";
import {Subscription} from "rxjs";
import {IconLoaderService} from "../services/icon-loader.service";


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit{
  items: Item[] = [];
  private itemSubscription!: Subscription;
  iconNames: string[] = [];


  constructor(private itemService: ItemService, private iconLoaderService: IconLoaderService) {}

  ngOnInit() {
    this.loadItemsAndIcons();
  }

  async loadItemsAndIcons() {
    this.items = await this.itemService.getItems();
    console.log(this.items);
    const iconNames = this.items.map((obj) => obj.id);
    this.iconLoaderService.registerIcons(iconNames);
  }

  addToCart(item: Item, count: number){
    this.itemService.addToCart(item, count);
  }

}
