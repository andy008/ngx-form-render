import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfomaximFormBuilderComponent } from './infomaxim-form-builder.component';

describe('InfomaximFormBuilderComponent', () => {
  let component: InfomaximFormBuilderComponent;
  let fixture: ComponentFixture<InfomaximFormBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfomaximFormBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfomaximFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
