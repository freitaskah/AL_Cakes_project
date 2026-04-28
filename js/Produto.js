const params = new URLSearchParams(window.location.search);
const id = params.get("id");

console.log("ID recebido:", id); // teste

const produtos = {
    morango: {
        nome: "Bolo de Morango",
        descricao: "Teste morango funcionando",
        imagem: "images/Bolo-Morango.png"
    },
    brigadeiro: {
        nome: "Bolo de Brigadeiro",
        descricao: "Teste brigadeiro funcionando",
        imagem: "images/Bolo-Brigadeiro.png"
    }
};

const produto = produtos[id];

if (produto) {
    document.getElementById("titulo").innerText = produto.nome;
    document.getElementById("descricao").innerText = produto.descricao;
    document.getElementById("imagem").src = produto.imagem;
} else {
    console.log("Produto não encontrado");
}