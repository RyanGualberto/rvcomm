import { CartItem } from "../../../components/CartItem";
import "./index.scss";

const Cart = () => {
  return (
    <div className="cart-container">
      <h1 className="cart-title">Carrinho</h1>
      <table className="cart-table-container">
        <thead className="cart-table-header">
          <tr className="cart-table-header-row">
            <th className="cart-table-header-cell">Produto</th>
            <th className="cart-table-header-cell">Entrega</th>
            <th className="cart-table-header-cell">Quantidade</th>
            <th className="cart-table-header-cell">Valor Unitário</th>
            <th className="cart-table-header-cell">Valor Total</th>
          </tr>
        </thead>
        <tbody className="cart-table-body">
          <CartItem />
        </tbody>
      </table>
      <div>
        <div>
          <div>
            <input type="number" />
            <button>OK</button>
          </div>
          <a href="#">Não sei meu CEP</a>
        </div>
        <div>
          <p>
            Subtotal (1 item) <span> R$8.999,99</span>
          </p>
          <p>
            Valor Total: <span> R$9.999,99</span>
          </p>
        </div>
      </div>
      <div>
        <button>Finalizar Compra</button>
      </div>
    </div>
  );
};

export { Cart };
