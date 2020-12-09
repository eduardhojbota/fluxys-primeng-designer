import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AstraComponent } from './astra.component';

describe('AstraComponent', () => {
  let component: AstraComponent;
  let fixture: ComponentFixture<AstraComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AstraComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AstraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
