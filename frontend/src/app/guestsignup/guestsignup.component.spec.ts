import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestsignupComponent } from './guestsignup.component';

describe('GuestsignupComponent', () => {
  let component: GuestsignupComponent;
  let fixture: ComponentFixture<GuestsignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuestsignupComponent]
    });
    fixture = TestBed.createComponent(GuestsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
