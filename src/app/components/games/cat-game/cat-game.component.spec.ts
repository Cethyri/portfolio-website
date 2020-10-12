import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatGameComponent } from './cat-game.component';

describe('CatGameComponent', () => {
  let component: CatGameComponent;
  let fixture: ComponentFixture<CatGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
