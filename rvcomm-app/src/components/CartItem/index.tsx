const CartItem = () => {
  return (
    <div className="cart-table-body-row">
      <div className="cart-table-body-cell">
        <img
          src="https://static.mundomax.com.br/produtos/79373/200/1.webp"
          alt=""
        />
        Guitarra Gretsch Electromatic G5425 Jet Club Prata
      </div>
      <div className="cart-table-body-cell">-</div>
      <div className="cart-table-body-cell quantity">
        <div className="input-quantity-container">
          <button className="action-button-quantity">-</button>
          <input type="number" className="input-quantity" />
          <button className="action-button-quantity">+</button>
        </div>
        <p>Excluir Produto</p>
      </div>
      <div className="cart-table-body-cell">R$89,99</div>
      <div className="cart-table-body-cell">R$89999,90</div>
    </div>
  );
};
export { CartItem };
