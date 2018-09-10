import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CwModifierComponent } from './cw-modifier.component';

describe('CwModifierComponent', () => {
  let component: CwModifierComponent;
  let fixture: ComponentFixture<CwModifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CwModifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CwModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
