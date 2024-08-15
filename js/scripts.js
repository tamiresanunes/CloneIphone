// Seleciona todos os elementos <li> dentro do contêiner com o ID "image-picker"
const buttons = document.querySelectorAll("#image-picker li");

// Seleciona o elemento de imagem do produto pelo ID "product-image"
const image = document.querySelector("#product-image");

// Adiciona um listener de evento de clique a cada botão
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // Exibe o evento do clique no console (para fins de depuração)
    console.log(e);

    // Remove a classe "selected" de todos os botões, para desmarcar qualquer seleção anterior
    buttons.forEach((btn) =>
      btn.querySelector(".color").classList.remove("selected")
    );

    // Obtém o botão que foi clicado
    const button = e.target;

    // Extrai o ID do botão clicado
    const id = button.getAttribute("id");

    // Adiciona a classe "selected" ao botão clicado
    button.querySelector(".color").classList.add("selected");

    // Aplica uma classe "changing" à imagem do produto para iniciar uma animação
    image.classList.toggle("changing");

    // Atualiza o atributo "src" da imagem para mostrar a imagem correspondente ao botão clicado
    image.setAttribute("src", `img/iphone_${id}.jpg`);

    // Remove a classe "changing" após 200ms, completando a animação
    setTimeout(() => {
      image.classList.toggle("changing");
    }, 200);
  });
});

