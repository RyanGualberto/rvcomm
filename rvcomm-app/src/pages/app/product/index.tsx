import "./index.scss";
import { useState } from "react";
import { CarouselContainer, ProductCard } from "../../../components";
import { products } from "../../../mock/products";
import { AiFillStar, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { priceFormat } from "../../../helpers/formats";
import { Link } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState({
    id: 1,
    available_quantity: 2,
    current_price: 18899.99,
    description:
      "Uma guitarra que combinará com sua paixão e energia. A Gretsch G2210 Streamliner Junir Jet foi feita para sobreviver á brutalidade. Solte performances poderosas e corajosas sem a preocupação subjacente com a segurança de sua guitarra. O perfil fino em forma de “U” e o braço de louro de 12” permitem que você mergulhe sem medo em escalas e riffs corajosos com agressividade, sabendo que sua guitarra responderá rapidamente.  Composta por captadores humbucking Broad'Tron, esta guitarra Streamliner oferece baixos robustos e um midrange gutural que é aproveitado e moldado por um controle de tom mestre, controle de volume e comutaçãi de captação de três vias.A Gretsch foi fundada em 1883, sendo uma esplêndida marca clássica de instrumentos musicais com cara de relíquias. Famosa pelos violões, guitarras, baixo, contrabaixo e bateria, que carregam um design diferenciado e próprio.Sempre se destacando dos outros modelos tradicionais da época pelo seu lindo visual e pela sua rica e encorpada sonoridade, o objetivo da marca é te fazer viajar no tempo. Uma guitarra que combinará com sua paixão e energia. A Gretsch G2210 Streamliner Junir Jet foi feita para sobreviver á brutalidade. Solte performances poderosas e corajosas sem a preocupação subjacente com a segurança de sua guitarra. O perfil fino em forma de “U” e o braço de louro de 12” permitem que você mergulhe sem medo em escalas e riffs corajosos com agressividade, sabendo que sua guitarra responderá rapidamente.  Composta por captadores humbucking Broad'Tron, esta guitarra Streamliner oferece baixos robustos e um midrange gutural que é aproveitado e moldado por um controle de tom mestre, controle de volume e comutaçãi de captação de três vias.A Gretsch foi fundada em 1883, sendo uma esplêndida marca clássica de instrumentos musicais com cara de relíquias. Famosa pelos violões, guitarras, baixo, contrabaixo e bateria, que carregam um design diferenciado e próprio.Sempre se destacando dos outros modelos tradicionais da época pelo seu lindo visual e pela sua rica e encorpada sonoridade, o objetivo da marca é te fazer viajar no tempo.",
    title: "Produto 20",
    url_image: "https://static.mundomax.com.br/produtos/79373/200/1.webp",
    last_price: 29.99,
    brand: "Shelter",
    category: "Cordas",
    rating: 4,
    rating_quantity: 80,
    is_favorited: true,
  });

  return (
    <div className="product-page-container">
      <div className="path-container">
        <Link className="path-link" to="/app/home">
          Página Inicial
        </Link>
        /
        <Link
          className="path-link"
          to={`/app/catalogo/?category=${product.category}`}
        >
          {product.category}
        </Link>
        /
        <Link
          className="path-link"
          to={`/app/catalogo/?brand=${product.category}`}
        >
          {product.brand}
        </Link>
      </div>
      <div className="product-card-informations-container">
        <div className="product-image-container">
          <img
            className="product-image"
            src={product.url_image}
            alt={product.title}
          />
        </div>
        <div className="product-container">
          <h1 className="product-name">{product.title}</h1>
          <div className="product-informations-container">
            <div className="product-details-container">
              <div className="product-aditional-container">
                <h2 className="product-brand">{product.brand}</h2>
                <p className="product-ref">
                  Ref: <span className="danger-label"> {product.id}</span>
                </p>
                <p className="product-availability">
                  Disponibilidade:{" "}
                  <span className="danger-label">
                    {product.available_quantity}
                  </span>{" "}
                  peças
                </p>
                <div className="product-rating">
                  <div>
                    {Array(5)
                      .fill(0)
                      .map((_, idx) => (
                        <AiFillStar
                          size={24}
                          color={product.rating >= idx + 1 ? "#b8860b" : "#ccc"}
                        />
                      ))}
                  </div>
                  <p>{product.rating_quantity} Avaliações</p>
                </div>
              </div>
              <div className="product-price-container">
                <div className="product-last-price-container">
                  de
                  <div className="product-last-price">
                    {priceFormat(product.last_price)}
                  </div>
                  por
                </div>
                <div className="product-current-price">
                  {priceFormat(product.current_price)}
                </div>
              </div>
            </div>
            <div className="product-actions-container">
              {product.is_favorited ? (
                <div className="favorite-action-container">
                  <AiFillHeart /> <p>Adicionar aos favoritos</p>
                </div>
              ) : (
                <div className="favorite-action-container">
                  <AiOutlineHeart /> <p>Adicionar aos favoritos</p>
                </div>
              )}
              <button className="button-buy">Comprar</button>
              <div className="cep-container">
                <div className="input-cep-container">
                  <input
                    placeholder="Insira seu CEP"
                    className="input-cep"
                    type="number"
                  />

                  <button className="button-cep">OK</button>
                </div>
                <a className="cep-info-link" href="">
                  Não sei meu cep
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-description-container">
        <h1 className="product-description-title">Descrição</h1>
        <p>{product.description}</p>
      </div>
      <div className="similar-products-container">
        <h1 className="similar-products-title">Produtos Similares</h1>
        <CarouselContainer item_width={275} per_page={4}>
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
        </CarouselContainer>
      </div>
    </div>
  );
};

export { Product };
