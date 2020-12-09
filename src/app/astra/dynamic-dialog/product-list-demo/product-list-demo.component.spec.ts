import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductListDemoComponent } from './product-list-demo.component';

describe('ProductListDemoComponent', () => {
  let component: ProductListDemoComponent;
  let fixture: ComponentFixture<ProductListDemoComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ProductListDemoComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
