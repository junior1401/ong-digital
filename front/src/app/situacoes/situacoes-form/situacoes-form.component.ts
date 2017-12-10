import { Component, OnInit } from '@angular/core';
import { Situacao, SituacaoService } from '../../services/situacao/situacao.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-situacoes-form',
  templateUrl: './situacoes-form.component.html',
  styleUrls: ['./situacoes-form.component.css'],
  providers: [SituacaoService]
})
export class SituacoesFormComponent implements OnInit {

  private title = "Nova situação"
  private model: Situacao;
  private situacaos: any

  constructor(private ss: SituacaoService,
     private router: Router,
     private aRoute: ActivatedRoute) { }

  ngOnInit() {
    this.model = new Situacao()
    this.model.descricao = ""

    this.aRoute.params.subscribe(
      // Se existir um parâmetro id, significa que queremos editar um objeto já existente
      params => {
        if(params['id']){
          this.ss.obterPorId(params['id']).subscribe(
            (existente: Situacao) => this.model = existente
          )
          this.title = "Editar situação"
        }
      }
    )
    
  }

  enviar() {
    // Preservando o roteador para evitar que a referência ao objeto se perca
    let roteador = this.router

    this.ss.salvar(this.model).subscribe(
      // Após a inserção ou atualização de um objeto, retorna à pagina de listagem
      () => roteador.navigate(['/situacoes']),
      erro => console.error(erro)
    )
  }

}
