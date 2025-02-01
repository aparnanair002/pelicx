import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestMasterComponent } from './guest-master.component';

describe('GuestMasterComponent', () => {
  let component: GuestMasterComponent;
  let fixture: ComponentFixture<GuestMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuestMasterComponent]
    });
    fixture = TestBed.createComponent(GuestMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
