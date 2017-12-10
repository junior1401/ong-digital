import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SituacoesFormComponent } from './situacoes-form.component';

describe('SituacoesFormComponent', () => {
  let component: SituacoesFormComponent;
  let fixture: ComponentFixture<SituacoesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SituacoesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SituacoesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
