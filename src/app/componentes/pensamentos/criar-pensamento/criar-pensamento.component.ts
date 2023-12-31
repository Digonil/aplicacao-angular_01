import { Component } from '@angular/core';
import { Pensamento } from '../listar-pensamento/pensamento';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {

  pensamento: Pensamento = {
    id: 1,
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo:'modelo1'
  }

  criarPensamento() {
    alert("Novo pensamento criado!")
  }

  cancelarCriacaoPensamento(){
    alert("Criação de pensamento cancelada!")
  }

}
