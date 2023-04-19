import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrderDertailManagementComponent } from './admin-order-dertail-management.component';

describe('AdminOrderDertailManagementComponent', () => {
  let component: AdminOrderDertailManagementComponent;
  let fixture: ComponentFixture<AdminOrderDertailManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminOrderDertailManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminOrderDertailManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
