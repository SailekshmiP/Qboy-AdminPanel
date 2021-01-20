import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpiCredentialsComponent } from './upi-credentials.component';

describe('UpiCredentialsComponent', () => {
  let component: UpiCredentialsComponent;
  let fixture: ComponentFixture<UpiCredentialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpiCredentialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpiCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
