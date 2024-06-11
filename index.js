let bibliotecaLista = [];
let biblioteca = ["seus livros : "];
let livro = {};
let entrada;
let contador = 1;
console.log(
  'para adicionar um livro digite seu nome, para gerenciar sua biblioteca digite "listar", para deixar o programa digite "sair"'
);
process.stdin.on("data", function (data) {
  entrada = data.toString().trim();
  if (entrada === "sair") {
    console.log("encerrando");
    process.exit();
  } else if (entrada === "cancelar") {
    livro = {};
    console.log("digite o nome do livro que deseja adicionar");
  } else if (entrada === "listar") {
    livro = {};
    for (let i = 1; i < biblioteca.length; i++) {
      bibliotecaLista.push(
        contador +
          " : nome: " +
          biblioteca[i].nome +
          ", autor: " +
          biblioteca[i].autor +
          ", tamanho: " +
          biblioteca[i].tamanho +
          ", genero: " +
          biblioteca[i].genero
      );

      contador++;
    }
    console.log(bibliotecaLista);
    entrada = "";
    bibliotecaLista = [];
    contador = 1;
    console.log(
      "para adicionar um livro digite seu nome, para remover um livro digite sua posição"
    );
  } else if (!livro.nome) {
    livro.nome = data.toString().trim();
    if (biblioteca.length == 1) {
      console.log("livro inexistente, tente novamente");
      livro = {};
      entrada = "";
    } else if (
      Number(livro.nome) > 0 &&
      Number(livro.nome) <= biblioteca.length
    ) {
      biblioteca.splice(livro.nome, 1);
      livro = {};
      entrada = "";
      console.log(
        'livro removido, para adicionar um novo livro digite seu nome, para gerenciar sua biblioteca digite "listar", para deixar o programa digite "sair"'
      );
      console.log(biblioteca);
    } else if (
      Number(livro.nome) <= 0 ||
      Number(livro.nome) > biblioteca.length
    ) {
      livro = {};
      entrada = "";
      console.log("livro inexistente, tente novamente");
    } else {
      console.log('digite o autor ou "cancelar" para começar novamente');
      entrada = "";
    }
  } else if (!livro.autor) {
    livro.autor = data.toString().trim();
    console.log(
      'digite o tamanho do livro ou "cancelar" para começar novamente'
    );
    entrada = "";
  } else if (!livro.tamanho) {
    livro.tamanho = Number(data.toString().trim());
    if (isNaN(livro.tamanho) || livro.tamanho === 0) {
      livro.tamanho = null;
      console.log(
        'digite um número válido ou "cancelar" para começar novamente'
      );
    } else {
      console.log('digite o genero ou "cancelar" para começar novamente');
      entrada = "";
    }
  } else if (!livro.genero) {
    livro.genero = data.toString().trim();
    if (Number(livro.genero)) {
      livro.genero = null;
      console.log("digite um genero existente");
    } else {
      biblioteca.push(livro);
      livro = {};
      console.log(
        'livro adicionado. para adicionar um novo livro digite seu nome, para gerenciar sua biblioteca digite "listar", para deixar o programa digite "sair"'
      );
      console.log(biblioteca);
      entrada = "";
    }
  }
});