import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculaMateriaComponent } from './matricula-materia.component';

describe('MatriculaMateriaComponent', () => {
  let component: MatriculaMateriaComponent;
  let fixture: ComponentFixture<MatriculaMateriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatriculaMateriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatriculaMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
