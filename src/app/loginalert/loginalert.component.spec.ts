import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginalertComponent } from './loginalert.component';

describe('LoginalertComponent', () => {
  let component: LoginalertComponent;
  let fixture: ComponentFixture<LoginalertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginalertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
