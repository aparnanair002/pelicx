import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcompanyComponent } from './editcompany.component';

describe('EditcompanyComponent', () => {
  let component: EditcompanyComponent;
  let fixture: ComponentFixture<EditcompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditcompanyComponent]
    });
    fixture = TestBed.createComponent(EditcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
