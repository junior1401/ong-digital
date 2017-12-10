import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriancasListaComponent } from './criancas-lista.component';

describe('CriancasListaComponent', () => {
  let component: CriancasListaComponent;
  let fixture: ComponentFixture<CriancasListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriancasListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriancasListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
