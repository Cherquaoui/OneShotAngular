import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElecModifierComponent } from './elec-modifier.component';

describe('ElecModifierComponent', () => {
  let component: ElecModifierComponent;
  let fixture: ComponentFixture<ElecModifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElecModifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElecModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
