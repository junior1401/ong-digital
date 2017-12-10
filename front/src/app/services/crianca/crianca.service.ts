import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Crianca{
  public _id: string;
  public nome: string;
  public rg: string;
  public cpf: string;
  public cor: string;
  public sexo: string;
  public dt_nascimento: Date;
  public escola_atual: string;
  public cpf_responsavel: string;
  public nome_responsavel: string;
  public tel_responsavel: string;
  public dt_entrada: Date;
  public dt_desligamento: Date;
  public situacao: string;
  public usuario: string;
}

@Injectable()
export class CriancaService {

  constructor(private http: HttpClient) { }
  
    public listarTodos(){
      return this.http.get('http://localhost:3000/criancas');
    }
  
    public obterPorId(id: string){
      return this.http.get('http://localhost:3000/criancas/' + id)
    }
  
    public salvar(c: Crianca){
      // Atualiza objeto já existente
      if(c._id){
        return this.http.post('http://localhost:3000/criancas', c)
      }
      // Inserção de novo objeto
      else{
        return this.http.put('http://localhost:3000/criancas', c)
      }
    }
  
    public excluir(id: string){
      return this.http.delete("http://localhost:3000/criancas/" + id)
    }

}
