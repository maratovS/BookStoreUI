import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderEditBookComponent } from './order-edit-book.component';

describe('OrderEditBookComponent', () => {
  let component: OrderEditBookComponent;
  let fixture: ComponentFixture<OrderEditBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderEditBookComponent]
    });
    fixture = TestBed.createComponent(OrderEditBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
