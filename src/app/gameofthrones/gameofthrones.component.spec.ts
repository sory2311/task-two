import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameofthronesComponent } from './gameofthrones.component';

describe('GameofthronesComponent', () => {
  let component: GameofthronesComponent;
  let fixture: ComponentFixture<GameofthronesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameofthronesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameofthronesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
