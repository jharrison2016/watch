import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigClockComponent } from './dig-clock.component';

describe('DigClockComponent', () => {
  let component: DigClockComponent;
  let fixture: ComponentFixture<DigClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigClockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
