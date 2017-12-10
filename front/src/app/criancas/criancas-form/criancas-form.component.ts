import { Component, OnInit } from '@angular/core';
import { Crianca, CriancaService } from '../../services/crianca/crianca.service';
import { Situacao, SituacaoService } from '../../services/situacao/situacao.service';
import { Usuario, UsuarioService } from '../../services/usuario/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment'
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-criancas-form',
  templateUrl: './criancas-form.component.html',
  styleUrls: ['./criancas-form.component.css'],
  providers: [CriancaService, SituacaoService, UsuarioService]
})
export class CriancasFormComponent implements OnInit {

  private title = "Nova criança"
  private model: Crianca;
  private usuarios: any
  private situacoes: any

  constructor(private cs: CriancaService,
     private ss: SituacaoService,
     private us: UsuarioService,
     private router: Router,
     private aRoute: ActivatedRoute) { }

  ngOnInit() {
    this.model = new Crianca()
    this.model.nome = ""
    this.model.rg = ""
    this.model.cpf = ""
    this.model.cor = ""
    this.model.sexo = ""
    this.model.escola_atual = ""
    this.model.nome_responsavel = ""
    this.model.tel_responsavel = ""
    this.model.situacao = ""
    this.model.usuario = ""

    this.usuarios = this.us.listarTodos()
    this.situacoes = this.ss.listarTodos()

    this.aRoute.params.subscribe(
      // Se existir um parâmetro id, significa que queremos editar um objeto já existente
      params => {
        if(params['id']){
          this.cs.obterPorId(params['id']).subscribe(
            (existente: Crianca) => this.model = existente
          )
          this.title = "Editar criança"
        }
      }
    )
    
  }

  enviar() {
    // Preservando o roteador para evitar que a referência ao objeto se perca
    let roteador = this.router

    this.cs.salvar(this.model).subscribe(
      // Após a inserção ou atualização de um objeto, retorna à pagina de listagem
      () => roteador.navigate(['/criancas']),
      erro => console.error(erro)
    )
  }

}
