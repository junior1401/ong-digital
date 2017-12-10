import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Situacao{
  public _id: string;
  public descricao: string;
}

@Injectable()
export class SituacaoService {

  constructor(private http: HttpClient) { }
  
    public listarTodos(){
      return this.http.get('http://localhost:3000/situacoes');
    }
  
    public obterPorId(id: string){
      return this.http.get('http://localhost:3000/situacoes/' + id)
    }
  
    public salvar(s: Situacao){
      // Atualiza objeto já existente
      if(s._id){
        return this.http.post('http://localhost:3000/situacoes', s)
      }
      // Inserção de novo objeto
      else{
        return this.http.put('http://localhost:3000/situacoes', s)
      }
    }
  
    public excluir(id: string){
      return this.http.delete("http://localhost:3000/situacoes/" + id)
    }

}
