import { Component } from '@angular/core';
import { CadastroPedidoComponent } from '../cadastro-pedido/cadastro-pedido.component';
import { TabelaPedidosComponent } from '../tabela-pedidos/tabela-pedidos.component';

@Component({
  selector: 'app-pagina-pedido',
  standalone: true,
  imports: [CadastroPedidoComponent, TabelaPedidosComponent],
  templateUrl: './pagina-pedido.component.html',
  styleUrl: './pagina-pedido.component.css'
})
export class PaginaPedidoComponent {

}
