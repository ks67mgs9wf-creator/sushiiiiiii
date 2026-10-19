/* CARDÁPIO DO SUSHI MARÉ */

const pratos = [
  {
    nome: "Salmão Nigiri",
    descricao: "Arroz temperado com salmão.",
    preco: 22.00,
    imagem:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80"
  },
  {
    nome: "Uramaki de Salmão",
    descricao: "Sushi enrolado com arroz por fora.",
    preco: 28.00,
    imagem:
      "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=600&q=80"
  },
  {
    nome: "Sashimi",
    descricao: "Fatias de peixe servidas sem arroz.",
    preco: 32.00,
    imagem:
      "https://images.unsplash.com/photo-1534482421-64566f976cfa?auto=format&fit=crop&w=600&q=80"
  }
];

/* LOCALIZA O ESPAÇO DO CARDÁPIO */
const lista = document.getElementById("lista-pratos");

/* MOSTRA OS PRATOS NA PÁGINA */
if (lista) {
  pratos.forEach((prato) => {
    const card = document.createElement("article");
    card.className = "prato";

    const imagem = document.createElement("img");
    imagem.src = prato.imagem;
    imagem.alt = prato.nome;
    imagem.loading = "lazy";

    const titulo = document.createElement("h3");
    titulo.textContent = prato.nome;

    const descricao = document.createElement("p");
    descricao.textContent = prato.descricao;

    const preco = document.createElement("div");
    preco.className = "preco";
    preco.textContent = prato.preco.toLocaleString(
      "pt-BR",
      {
        style: "currency",
        currency: "BRL"
      }
    );

    card.append(imagem, titulo, descricao, preco);
    lista.appendChild(card);
  });
}

/* ATUALIZA O ANO DO RODAPÉ */
const ano = document.getElementById("ano");

if (ano) {
  ano.textContent = new Date().getFullYear();
}
