import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.page.html',
  styleUrls: ['./promocoes.page.scss'],
})
export class PromocoesPage implements OnInit {

  listaProdutos = [
    {
      nome:"Picanha Friboi",
      descricao:"Qualidade Friboi que todos gostão.",
      valor:400
    },
    {
      nome:"Carvão vegetal",
      descricao:"Selecionado especificamente para você",
      valor:10
    },
    {
      nome:"Linguiça Toscana",
      descricao:"Defumada e com pimenta",
      valor:25
    },
    {
      nome:"Ceveja Heineken",
      descricao:"A verdinha amada pelo mundo inteiro",
      valor:4
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
