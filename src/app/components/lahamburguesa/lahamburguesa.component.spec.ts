import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LahamburguesaComponent } from './lahamburguesa.component';

describe('LahamburguesaComponent', () => {
  let component: LahamburguesaComponent;
  let fixture: ComponentFixture<LahamburguesaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LahamburguesaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LahamburguesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
