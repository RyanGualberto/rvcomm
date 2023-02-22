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
          <CartItem />
          <CartItem />
        </tbody>
        <tfoot className="cart-table-footer">
          <tr className="cart-table-footer-row">
            <td className="cart-table-footer-cell cep-container">
              <div className="input-cep-container">
                  <input className="input-cep" type="number" />
                  <button className="button-cep">OK</button>
              </div>
              <a className="link-cep" href="#">Não sei meu CEP</a>
            </td>
            <td className="cart-table-footer-cell price-total-container">
              <p>
                Subtotal (1 item) <span className="price subtotal"> R$8.999,99</span>
              </p>
              <p>
                Valor Total: <span className="price total"> R$9.999,99</span>
              </p>
            </td>
          </tr>
        </tfoot>
      </table>
      <div>
        <button>Finalizar Compra</button>
      </div>
    </div>
  );
};

export { Cart };
