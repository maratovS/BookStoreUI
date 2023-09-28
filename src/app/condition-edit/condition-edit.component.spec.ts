import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionEditComponent } from './condition-edit.component';

describe('ConditionEditComponent', () => {
  let component: ConditionEditComponent;
  let fixture: ComponentFixture<ConditionEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConditionEditComponent]
    });
    fixture = TestBed.createComponent(ConditionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
