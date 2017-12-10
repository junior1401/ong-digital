import { Component, OnInit } from '@angular/core';
import { DocumentoService } from '../../services/documento/documento.service'
import * as moment from 'moment'

@Component({
  selector: 'app-documentos-lista',
  templateUrl: './documentos-lista.component.html',
  styleUrls: ['./documentos-lista.component.css'],
  providers: [DocumentoService]
})
export class DocumentosListaComponent implements OnInit {

  private documentos
  private title = 'Lista de Documentos'

  constructor(private service: DocumentoService) {
    this.service.listarTodos()
      .subscribe(dados => this.documentos = dados)
  }

  atualizarLista(){
    this.service.listarTodos().subscribe((dados: Response) => this.documentos = dados)
  }

  excluir(id: string){
    if(confirm('Deseja realmente excluir este documento?')){
      this.service.excluir(id).subscribe(
        () => this.atualizarLista()
      )
    }
  }

  formatarData(data: string){
    return moment(data, 'YYYY-MM-DDThh:mm:ssZ').format('DD/MM/YYYY')
  }

  ngOnInit() {
  }

}
