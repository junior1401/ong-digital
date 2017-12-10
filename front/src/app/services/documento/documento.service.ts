import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Documento{
  public _id: string;
  public nome: string;
  public tags: string;
  public local_arquivo: string;
  public dt_importacao: Date;
  public crianca: string;
  public usuario: string;
}

@Injectable()
export class DocumentoService {

  constructor(private http: HttpClient) { }
  
    public listarTodos(){
      return this.http.get('http://localhost:3000/documentos');
    }
  
    public obterPorId(id: string){
      return this.http.get('http://localhost:3000/documentos/' + id)
    }
  
    public salvar(d: Documento){
      // Atualiza objeto já existente
      if(d._id){
        return this.http.post('http://localhost:3000/documentos', d)
      }
      // Inserção de novo objeto
      else{
        return this.http.put('http://localhost:3000/documentos', d)
      }
    }
  
    public excluir(id: string){
      return this.http.delete("http://localhost:3000/documentos/" + id)
    }

}
