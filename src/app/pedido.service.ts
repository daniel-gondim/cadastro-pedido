import { Injectable } from '@angular/core';

export interface Pedido {
  numero: number;
  cpf: string;
  codigo: number;
  dataDoPedido: Date;
  quantidadeDeProdutos: number;
}

@Injectable({
  providedIn: 'root',
})

export class PedidoService {
  private pedidos: Pedido[] = [];

  constructor() {}

  adicionarPedido(pedido: Pedido) {
    this.pedidos.push(pedido)
  }

  obterPedidos(): Pedido[] {
    return this.pedidos;
  }
}
