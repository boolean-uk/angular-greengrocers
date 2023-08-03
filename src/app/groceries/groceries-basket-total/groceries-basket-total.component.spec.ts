import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceriesBasketTotalComponent } from './groceries-basket-total.component';

describe('GroceriesBasketTotalComponent', () => {
  let component: GroceriesBasketTotalComponent;
  let fixture: ComponentFixture<GroceriesBasketTotalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroceriesBasketTotalComponent]
    });
    fixture = TestBed.createComponent(GroceriesBasketTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
