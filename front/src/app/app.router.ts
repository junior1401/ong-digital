import { Routes, RouterModule } from '@angular/router'
import { CriancasListaComponent } from './criancas/criancas-lista/criancas-lista.component';
import { DocumentosListaComponent } from './documentos/documentos-lista/documentos-lista.component';
import { SituacoesListaComponent } from './situacoes/situacoes-lista/situacoes-lista.component';
import { UsuariosListaComponent } from './usuarios/usuarios-lista/usuarios-lista.component';
import { CriancasFormComponent } from './criancas/criancas-form/criancas-form.component';
import { DocumentosFormComponent } from './documentos/documentos-form/documentos-form.component';
import { SituacoesFormComponent } from './situacoes/situacoes-form/situacoes-form.component';
import { UsuariosFormComponent } from './usuarios/usuarios-form/usuarios-form.component';

const routes : Routes = [
    {
        path: '',
        component: DocumentosListaComponent
    },

    {
        path: 'criancas',
        component: CriancasListaComponent
    },

    {
        path: 'criancas/novo',
        component: CriancasFormComponent
    },

    {
        path: 'criancas/:id',
        component: CriancasFormComponent
    },

    {
        path: 'situacoes',
        component: SituacoesListaComponent
    },

    {
        path: 'situacoes/novo',
        component: SituacoesFormComponent
    },

    {
        path: 'situacoes/:id',
        component: SituacoesFormComponent
    },

    {
        path: 'documentos',
        component: DocumentosListaComponent
    },

    {
        path: 'documentos/novo',
        component: DocumentosFormComponent
    },

    {
        path: 'documentos/:id',
        component: DocumentosFormComponent
    },

    {
        path: 'usuarios',
        component: UsuariosListaComponent
    },

    {
        path: 'usuarios/novo',
        component: UsuariosFormComponent
    },

    {
        path: 'usuarios/:id',
        component: UsuariosFormComponent
    }
]

export const RoutingModule = RouterModule.forRoot(routes)