import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUpiCredentialsComponent } from './edit-upi-credentials.component';

describe('EditUpiCredentialsComponent', () => {
  let component: EditUpiCredentialsComponent;
  let fixture: ComponentFixture<EditUpiCredentialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUpiCredentialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUpiCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
