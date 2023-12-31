import { Component, Input } from '@angular/core';
import { Pensamento } from '../listar-pensamento/pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent {

  @Input()pensamento: Pensamento = {
    id: 0,
    conteudo: 'Vai Corinthians!!!',
    autoria: 'Diego',
    modelo: 'modelo3'
  }

  constructor(){

  }

  larguraPensamento(): string{
    if(this.pensamento.conteudo.length >= 256){
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }


}
