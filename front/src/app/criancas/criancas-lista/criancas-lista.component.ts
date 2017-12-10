import { Component, OnInit } from '@angular/core';
import { CriancaService } from '../../services/crianca/crianca.service'
import * as moment from 'moment'

@Component({
  selector: 'app-criancas-lista',
  templateUrl: './criancas-lista.component.html',
  styleUrls: ['./criancas-lista.component.css'],
  providers: [CriancaService]
})
export class CriancasListaComponent implements OnInit {

  private criancas
  private title = 'Lista de Criancas'

  constructor(private service: CriancaService) {
    this.service.listarTodos()
      .subscribe(dados => this.criancas = dados)
  }

  atualizarLista(){
    this.service.listarTodos().subscribe((dados: Response) => this.criancas = dados)
  }

  excluir(id: string){
    if(confirm('Deseja realmente excluir esta criança?')){
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
