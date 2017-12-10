import { Component, OnInit } from '@angular/core';
import { SituacaoService } from '../../services/situacao/situacao.service'
import * as moment from 'moment'

@Component({
  selector: 'app-situacoes-lista',
  templateUrl: './situacoes-lista.component.html',
  styleUrls: ['./situacoes-lista.component.css'],
  providers: [SituacaoService]
})
export class SituacoesListaComponent implements OnInit {

  private situacoes
  private title = 'Lista de Situações'

  constructor(private service: SituacaoService) {
    this.service.listarTodos()
      .subscribe(dados => this.situacoes = dados)
  }

  atualizarLista(){
    this.service.listarTodos().subscribe((dados: Response) => this.situacoes = dados)
  }

  excluir(id: string){
    if(confirm('Deseja realmente excluir esta situação?')){
      this.service.excluir(id).subscribe(
        () => this.atualizarLista()
      )
    }
  }

  formatarData(data: string){
    return moment(data, 'YYYY-MM-DDThh:mm:ssZ').format('DD/MM/YYYY hh[h] mm')
  }

  ngOnInit() {
  }

}
