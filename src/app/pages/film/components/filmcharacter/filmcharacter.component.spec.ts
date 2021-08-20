import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmcharacterComponent } from './filmcharacter.component';

describe('FilmcharacterComponent', () => {
  let component: FilmcharacterComponent;
  let fixture: ComponentFixture<FilmcharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmcharacterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmcharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
