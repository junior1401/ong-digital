import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriancasFormComponent } from './criancas-form.component';

describe('CriancasFormComponent', () => {
  let component: CriancasFormComponent;
  let fixture: ComponentFixture<CriancasFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriancasFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriancasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
