import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherEditComponent } from './publisher-edit.component';

describe('PublisherEditComponent', () => {
  let component: PublisherEditComponent;
  let fixture: ComponentFixture<PublisherEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublisherEditComponent]
    });
    fixture = TestBed.createComponent(PublisherEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
