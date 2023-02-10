import "./index.scss";
import {
  CarouselContainer,
  ProductCard,
  BigBanner,
  BannerTitle,
} from "../../../components";
import { products } from "../../../mock/products";

const Home = () => {
  return (
    <div className="home-container">
      <BigBanner label="Seja Bem Vindo" />
      <div className="home-section">
        <BannerTitle title="Menores Preços" />
        <CarouselContainer per_page={5} item_width={275}>
          {products.map((product, index) => (
            <ProductCard
              key={index}
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
        </CarouselContainer>
      </div>
      <div className="home-section">
        <BannerTitle title="Mais Comprados" />
        <CarouselContainer per_page={5} item_width={275}>
          {products.map((product, index) => (
            <ProductCard
              key={index}
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
        </CarouselContainer>
      </div>
    </div>
  );
};

export { Home };
