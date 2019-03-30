import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadercompComponent } from './headercomp.component';

describe('HeadercompComponent', () => {
  let component: HeadercompComponent;
  let fixture: ComponentFixture<HeadercompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadercompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadercompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
