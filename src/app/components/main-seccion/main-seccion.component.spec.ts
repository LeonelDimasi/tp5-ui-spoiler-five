import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSeccionComponent } from './main-seccion.component';

describe('MainSeccionComponent', () => {
  let component: MainSeccionComponent;
  let fixture: ComponentFixture<MainSeccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSeccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
