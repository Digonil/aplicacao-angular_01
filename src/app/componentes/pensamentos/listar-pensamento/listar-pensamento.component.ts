import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {


  listarPensamentos = [
    {
      conteudo: 'Vai Corinthians!!!',
      autoria: 'Diego',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente pai',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Minha propriedade é decorada com @input()',
      autoria: 'Componente filho',
      modelo: 'modelo3'
    },
    {
      conteudo: 'uahuihdiah hioahdoiahoidhsad hadhdoahuhdu hsuiaisuhauihsdishiahdds oadhuhsuidhiauhdhiaushdas duahudhaisuhdiashdihasdaiphud',
      autoria: 'teste',
      modelo: 'modelo3'
    }
  ]

}
