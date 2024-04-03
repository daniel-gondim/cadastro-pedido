import { Component } from '@angular/core';
import { PedidoService } from '../pedido.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-pedido',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro-pedido.component.html',
  styleUrl: './cadastro-pedido.component.css',
})
export class CadastroPedidoComponent {
  numero: any;
  cpf = '';
  codigo: any;
  dataDoPedido: any;
  quantidadeDeProdutos: any;

  constructor(private pedidoService: PedidoService) {}

  adicionarPedido() {
    this.pedidoService.adicionarPedido({
      numero: this.numero,
      cpf: this.cpf,
      codigo: this.codigo,
      dataDoPedido: this.dataDoPedido,
      quantidadeDeProdutos: this.quantidadeDeProdutos,
    });
  }
}
