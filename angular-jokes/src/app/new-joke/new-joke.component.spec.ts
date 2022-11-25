import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewJokeComponent } from './new-joke.component';

describe('NewJokeComponent', () => {
  let component: NewJokeComponent;
  let fixture: ComponentFixture<NewJokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewJokeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
