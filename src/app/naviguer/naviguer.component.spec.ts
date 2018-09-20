import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaviguerComponent } from './naviguer.component';

describe('NaviguerComponent', () => {
  let component: NaviguerComponent;
  let fixture: ComponentFixture<NaviguerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaviguerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaviguerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
