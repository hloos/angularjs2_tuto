import { Component, OnInit } from '@angular/core';
import { Order } from '../../model/Order'
import { Item } from '../../model/Item'
import { PriceHandler } from '../services/PriceHandler'
import { Inject } from '@angular/core';

@Component({
  selector: 'app-order-detail',
  //other way to do selector: '.app-order-detail', -> <div class="app-order-detail"></div>
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css'],
  providers: [PriceHandler]
})
export class OrderDetailComponent implements OnInit {

  private order: Order;
  private newItem: Item
  private priceHandler: PriceHandler
  private selectedItem: Item

  constructor(@Inject(PriceHandler) priceHandler: PriceHandler) { 
    this.priceHandler = priceHandler
  }

  ngOnInit() {
    let item1 = new Item(1, 'blueberry', 'excellent', 3, 45)
    let item2 = new Item(2, 'blackberry', 'good enough', 5, 78)
    let newPrice = this.priceHandler.addTax(12)
    let item3 = new Item(3, 'apple', 'light but great', 1, newPrice)
    let itemList = [item1, item2, item3]
    this.order = new Order(1, "Zizou", itemList)
  }

  selectItem(item: Item) {
    this.selectedItem = item
  }

  updateUserMail(input: string) {
    console.log('Input '+ input)
  }

  addItem(name: string, description: string, price: number, amount: number) {
    this.order.items.push(new Item(12, name, description, +price, +amount))
  }
}
