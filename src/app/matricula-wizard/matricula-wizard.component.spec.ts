import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculaWizardComponent } from './matricula-wizard.component';

describe('MatriculaWizardComponent', () => {
  let component: MatriculaWizardComponent;
  let fixture: ComponentFixture<MatriculaWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatriculaWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatriculaWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
