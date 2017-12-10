import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'
import { RoutingModule } from './app.router'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { CriancasListaComponent } from './criancas/criancas-lista/criancas-lista.component';
import { DocumentosListaComponent } from './documentos/documentos-lista/documentos-lista.component';
import { SituacoesListaComponent } from './situacoes/situacoes-lista/situacoes-lista.component';
import { UsuariosListaComponent } from './usuarios/usuarios-lista/usuarios-lista.component';
import { CriancasFormComponent } from './criancas/criancas-form/criancas-form.component';
import { DocumentosFormComponent } from './documentos/documentos-form/documentos-form.component';
import { SituacoesFormComponent } from './situacoes/situacoes-form/situacoes-form.component';
import { UsuariosFormComponent } from './usuarios/usuarios-form/usuarios-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CriancasListaComponent,
    DocumentosListaComponent,
    SituacoesListaComponent,
    UsuariosListaComponent,
    CriancasFormComponent,
    DocumentosFormComponent,
    SituacoesFormComponent,
    UsuariosFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
