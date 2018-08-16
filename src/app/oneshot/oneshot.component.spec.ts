import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneshotComponent } from './oneshot.component';

describe('OneshotComponent', () => {
  let component: OneshotComponent;
  let fixture: ComponentFixture<OneshotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneshotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
