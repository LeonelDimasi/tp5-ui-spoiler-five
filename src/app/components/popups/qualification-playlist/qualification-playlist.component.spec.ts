import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationPlaylistComponent } from './qualification-playlist.component';

describe('QualificationPlaylistComponent', () => {
  let component: QualificationPlaylistComponent;
  let fixture: ComponentFixture<QualificationPlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualificationPlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualificationPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
