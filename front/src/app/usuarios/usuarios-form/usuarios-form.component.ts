import { Component, OnInit } from '@angular/core';
import { Usuario, UsuarioService } from '../../services/usuario/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.css'],
  providers: [UsuarioService]
})


export class UsuariosFormComponent implements OnInit {

  private title = "Novo usuário"
  private model: Usuario;
  private usuarios: any

  constructor(private us: UsuarioService,
     private router: Router,
     private aRoute: ActivatedRoute) { }

  ngOnInit() {
    this.model = new Usuario()
    this.model.nome = ""
    this.model.login = ""
    this.model.senha = ""
    this.model.funcao = ""
    this.model.tipo_user = ""
    this.model.status = ""
    this.model.dt_ult_alteracao = new Date(Date.now())

    this.aRoute.params.subscribe(
      // Se existir um parâmetro id, significa que queremos editar um objeto já existente
      params => {
        if(params['id']){
          this.us.obterPorId(params['id']).subscribe(
            (existente: Usuario) => this.model = existente
          )
          this.title = "Editar usuário"
        }
      }
    )
    
  }

  enviar() {
    // Preservando o roteador para evitar que a referência ao objeto se perca
    let roteador = this.router

    this.us.salvar(this.model).subscribe(
      // Após a inserção ou atualização de um objeto, retorna à pagina de listagem
      () => roteador.navigate(['/usuarios']),
      erro => console.error(erro)
    )
  }

}
