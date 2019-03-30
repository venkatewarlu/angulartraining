import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazecardComponent } from './amazecard.component';

describe('AmazecardComponent', () => {
  let component: AmazecardComponent;
  let fixture: ComponentFixture<AmazecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmazecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
