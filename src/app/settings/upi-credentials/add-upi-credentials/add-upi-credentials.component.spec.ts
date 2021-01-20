import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpiCredentialsComponent } from './add-upi-credentials.component';

describe('AddUpiCredentialsComponent', () => {
  let component: AddUpiCredentialsComponent;
  let fixture: ComponentFixture<AddUpiCredentialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUpiCredentialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpiCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
