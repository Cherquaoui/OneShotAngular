import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterGoComponent } from './ajouter-go.component';

describe('AjouterGoComponent', () => {
  let component: AjouterGoComponent;
  let fixture: ComponentFixture<AjouterGoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterGoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterGoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
