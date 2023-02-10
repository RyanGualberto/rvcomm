import "./index.scss";
import { ProductCard } from "../../../components";
import { products } from "../../../mock/products";

const Catalogo = () => {
  return (
    <div className="products-page-container">
      <div className="products-catalog-container">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            id={product.id}
            available_quantity={product.available_quantity}
            current_price={product.current_price}
            description={product.description}
            title={product.title}
            url_image={product.url_image}
            last_price={product.last_price}
            brand={product.brand}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
};

export { Catalogo };
