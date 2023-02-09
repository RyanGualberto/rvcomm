import { Link, useLocation } from "react-router-dom";
import { renderText } from "../../../helpers/renderTextToAuthPage";
import "./index.scss";

const Sign = () => {
  const { pathname } = useLocation();

  return (
    <div className="auth-page-container">
      <nav className="navbar">
        <div className="logo">RVCOMM</div>
      </nav>
      <main className="content">
        <div>
          <h1>Seja Bem vindo(a)</h1>
          <p>Venha conhecer nossos produtos</p>
          <p>O maior e melhor E-Commerce de toda a DevLândia</p>
        </div>
        <div>
          <form>
            <h1>{renderText("Title", pathname)}</h1>
            {pathname.includes("/registrar") && (
              <>
                <p>Nome</p>
                <input type="text" placeholder="John Doe" />{" "}
              </>
            )}
            <p>Email</p>
            <input type="text" placeholder="JohnDoe@gmail.com" />
            {pathname.includes("/registrar") && (
              <>
                <p>Telefone</p>
                <input type="tel" maxLength={13} placeholder="13 98854-8301" />
              </>
            )}

            {!pathname.includes("/recuperar_senha") && (
              <>
                <p>Senha</p>
                <input type="password" placeholder="12345678" />
              </>
            )}
            {pathname.includes("/registrar") && (
              <>
                <p>Confirmar Senha</p>
                <input type="password" placeholder="12345678" />
              </>
            )}
            <button type="submit">
              {renderText("ActionButton", pathname)}
            </button>
            <div className="extra-links">
              <Link
                className="recovery-password-link"
                to="/auth/recuperar_senha"
              >
                Esqueci a senha
              </Link>
              <Link
                className="secondary-link"
                to={`/auth/${renderText(
                  "SecondaryLink",
                  pathname
                ).toLowerCase()}`}
              >
                {renderText("SecondaryLink", pathname)}
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export { Sign };
