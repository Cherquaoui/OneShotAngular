import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElecTravModifierComponent } from './elec-trav-modifier.component';

describe('ElecTravModifierComponent', () => {
  let component: ElecTravModifierComponent;
  let fixture: ComponentFixture<ElecTravModifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElecTravModifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElecTravModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
