import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceriesBasketComponent } from './groceries-basket.component';

describe('GroceriesBasketComponent', () => {
  let component: GroceriesBasketComponent;
  let fixture: ComponentFixture<GroceriesBasketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroceriesBasketComponent]
    });
    fixture = TestBed.createComponent(GroceriesBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
