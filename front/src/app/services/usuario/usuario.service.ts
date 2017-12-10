import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Usuario{
  public _id: string;
  public nome: string;
  public login: string;
  public senha: string;
  public funcao: string;
  public tipo_user: string;
  public status: string;
  public dt_inclusao: Date;
  public dt_ult_alteracao: Date;  
}

@Injectable()
export class UsuarioService {

  constructor(private http: HttpClient) { }
  
    public listarTodos(){
      return this.http.get('http://localhost:3000/usuarios');
    }
  
    public obterPorId(id: string){
      return this.http.get('http://localhost:3000/usuarios/' + id)
    }
  
    public salvar(u: Usuario){
      // Atualiza objeto já existente
      if(u._id){
        return this.http.post('http://localhost:3000/usuarios', u)
      }
      // Inserção de novo objeto
      else{
        return this.http.put('http://localhost:3000/usuarios', u)
      }
    }
  
    public excluir(id: string){
      return this.http.delete("http://localhost:3000/usuarios/" + id)
    }

}
