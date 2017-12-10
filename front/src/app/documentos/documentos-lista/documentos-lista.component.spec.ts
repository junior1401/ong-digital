import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentosListaComponent } from './documentos-lista.component';

describe('DocumentosListaComponent', () => {
  let component: DocumentosListaComponent;
  let fixture: ComponentFixture<DocumentosListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentosListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
