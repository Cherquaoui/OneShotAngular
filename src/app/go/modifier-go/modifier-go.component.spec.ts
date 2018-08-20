import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierGoComponent } from './modifier-go.component';

describe('ModifierGoComponent', () => {
  let component: ModifierGoComponent;
  let fixture: ComponentFixture<ModifierGoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierGoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierGoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
