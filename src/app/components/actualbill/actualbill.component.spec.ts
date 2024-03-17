import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualbillComponent } from './actualbill.component';

describe('ActualbillComponent', () => {
  let component: ActualbillComponent;
  let fixture: ComponentFixture<ActualbillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualbillComponent]
    });
    fixture = TestBed.createComponent(ActualbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
