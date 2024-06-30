import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderAddModalComponent } from './order-add-modal.component';

describe('OrderAddModalComponent', () => {
  let component: OrderAddModalComponent;
  let fixture: ComponentFixture<OrderAddModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderAddModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
