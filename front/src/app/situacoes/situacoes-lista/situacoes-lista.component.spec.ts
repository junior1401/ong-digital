import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SituacoesListaComponent } from './situacoes-lista.component';

describe('SituacoesListaComponent', () => {
  let component: SituacoesListaComponent;
  let fixture: ComponentFixture<SituacoesListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SituacoesListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SituacoesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
