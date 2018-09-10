import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CwComponent } from './cw.component';

describe('CwComponent', () => {
  let component: CwComponent;
  let fixture: ComponentFixture<CwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
