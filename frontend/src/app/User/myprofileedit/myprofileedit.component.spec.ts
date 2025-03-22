import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyprofileeditComponent } from './myprofileedit.component';

describe('MyprofileeditComponent', () => {
  let component: MyprofileeditComponent;
  let fixture: ComponentFixture<MyprofileeditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyprofileeditComponent]
    });
    fixture = TestBed.createComponent(MyprofileeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
