import "./index.scss";
import { TbUserCircle, TbShoppingCart } from "react-icons/tb";
import { CgSearch } from "react-icons/cg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-container">
      <section>
        <Link to="/app/home" className="logo">
          RVCOMM
        </Link>
        <form className="input-container">
          <input type="text" placeholder="Pesquise por um produto" />
          <button>
            <CgSearch size={28} color="#333" />
          </button>
        </form>
        <div>
          <Link to="/app/perfil">
            <TbUserCircle size={32} color="#fff" />
          </Link>
          <Link to="/app/carrinho">
            <TbShoppingCart size={32} color="#fff" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export { Navbar };
