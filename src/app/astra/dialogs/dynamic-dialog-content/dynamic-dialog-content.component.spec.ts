import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDialogContentComponent } from './dynamic-dialog-content.component';

describe('DynamicDialogContentComponent', () => {
  let component: DynamicDialogContentComponent;
  let fixture: ComponentFixture<DynamicDialogContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicDialogContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicDialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
