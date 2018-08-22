import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CwAjouterComponent } from './cw-ajouter.component';

describe('CwAjouterComponent', () => {
  let component: CwAjouterComponent;
  let fixture: ComponentFixture<CwAjouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CwAjouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CwAjouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
