function gerarPrevisao() {
    const produtos = ["Tomate", "Alface", "Cenoura", "Batata"];
    const precos = [5.5, 3.2, 4.8, 2.9];
    const climas = ["Ensolarado", "Chuvoso", "Nublado", "Ventoso"];

    const indexProduto = Math.floor(Math.random() * produtos.length);
    const indexClima = Math.floor(Math.random() * climas.length);

    const resultado = `Hoje o preço do ${produtos[indexProduto]} é R$ ${precos[indexProduto].toFixed(2)}. Clima: ${climas[indexClima]}.`;

    document.getElementById("resultado").innerText = resultado;
}
