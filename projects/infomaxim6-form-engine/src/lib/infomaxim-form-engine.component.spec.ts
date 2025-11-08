import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfomaximFormEngineComponent } from './infomaxim-form-engine.component';

describe('InfomaximFormEngineComponent', () => {
  let component: InfomaximFormEngineComponent;
  let fixture: ComponentFixture<InfomaximFormEngineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfomaximFormEngineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfomaximFormEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
