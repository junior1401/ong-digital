import { Component, OnInit } from '@angular/core';
import { Crianca, CriancaService } from '../../services/crianca/crianca.service';
import { Usuario, UsuarioService } from '../../services/usuario/usuario.service';
import { Documento, DocumentoService } from '../../services/documento/documento.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-documentos-form',
  templateUrl: './documentos-form.component.html',
  styleUrls: ['./documentos-form.component.css'],
  providers: [CriancaService, UsuarioService, DocumentoService]
})
export class DocumentosFormComponent implements OnInit {

  private title = "Novo documento"
  private model: Documento;
  private criancas: any
  private usuarios: any

  constructor(private cs: CriancaService,
     private us: UsuarioService,
     private ds: DocumentoService,
     private router: Router,
     private aRoute: ActivatedRoute) { }

  ngOnInit() {
    this.model = new Documento()
    this.model.nome = ""
    this.model.tags = ""
    this.model.local_arquivo = ""
    this.model.dt_importacao = new Date(Date.now())
    this.model.usuario = ""
    this.model.crianca = ""

    this.criancas = this.cs.listarTodos()
    this.usuarios = this.us.listarTodos()

    this.aRoute.params.subscribe(
      // Se existir um parâmetro id, significa que queremos editar um objeto já existente
      params => {
        if(params['id']){
          this.ds.obterPorId(params['id']).subscribe(
            (existente: Documento) => this.model = existente
          )
          this.title = "Editar documento"
        }
      }
    )
    
  }

  enviar() {
    // Preservando o roteador para evitar que a referência ao objeto se perca
    let roteador = this.router

    this.ds.salvar(this.model).subscribe(
      // Após a inserção ou atualização de um objeto, retorna à pagina de listagem
      () => roteador.navigate(['/documentos']),
      erro => console.error(erro)
    )
  }

}
