import "./index.scss";
import { IProductCard } from "../../interfaces/products/IProductCard";
import { priceFormat } from "../../helpers/formats";

const ProductCard = ({
  current_price,
  title,
  url_image,
  last_price,
  brand,
}: IProductCard) => {
  return (
    <div className="product-card-container">
      <img className="product-card-image" src={url_image} />
      <div className="product-card-brand">{brand}</div>
      <div className="product-card-title">{title}</div>
      <div className="product-card-last-price">
        {last_price ? priceFormat(last_price) : null}
      </div>
      <div className="product-card-current-price">
        {priceFormat(current_price)}
      </div>
    </div>
  );
};

export { ProductCard };
