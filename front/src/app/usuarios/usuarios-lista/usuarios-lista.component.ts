import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service'
import * as moment from 'moment'

@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.component.html',
  styleUrls: ['./usuarios-lista.component.css'],
  providers: [UsuarioService]
})
export class UsuariosListaComponent implements OnInit {

  private usuarios
  private title = 'Lista de Usuários'

  constructor(private service: UsuarioService) {
    this.service.listarTodos()
      .subscribe(dados => this.usuarios = dados)
  }

  atualizarLista(){
    this.service.listarTodos().subscribe((dados: Response) => this.usuarios = dados)
  }

  excluir(id: string){
    if(confirm('Deseja realmente excluir este usuário?')){
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
