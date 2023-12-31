import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {

  totalCarrinho = 0;

  listaItens =[];

  constructor(public bdtemp: BdtempService) { }

  ngOnInit() {
  }

  buscarItensCarrinho(){
    this.listaItens = this.bdtemp.buscar('carrinho');
  }

  ionViewWillEnter(){
    this.buscarItensCarrinho();
    this.buscarTotalCarrinho();
  }

  buscarTotalCarrinho(){
    this.totalCarrinho = this.bdtemp.buscar('totalCarrinho');
  }

}
