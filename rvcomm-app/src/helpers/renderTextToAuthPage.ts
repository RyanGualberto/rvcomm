type ITextOptions = "Title" | "ActionButton" | "SecondaryLink";

const renderText = (text_prop: ITextOptions, path: string): string => {
    let pathLowerCase = path.toLowerCase()

    switch (text_prop) {
      case "Title":
        if (pathLowerCase.includes("/recuperar_senha")) {
          return "Recuperar Senha";
        } else if (pathLowerCase.includes("/registrar")) {
          return "Cadastro";
        } else {
          return "Login";
        }
      case "ActionButton":
        if (pathLowerCase.includes("/recuperar_senha")) {
          return "Enviar Email";
        } else if (pathLowerCase.includes("/registrar")) {
          return "Cadastrar";
        } else {
          return "Entrar";
        }
      case "SecondaryLink":
        if (pathLowerCase.includes("/recuperar_senha")) {
          return "Entrar";
        } else if (pathLowerCase.includes("/registrar")) {
          return "Entrar";
        } else {
          return "Registrar";
        }
    }
  };

  export { renderText }