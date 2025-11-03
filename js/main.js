const emailContainer = document.querySelector(".email-container");
const emailInput = document.querySelector("#email");
const btn = document.querySelector("#btn");
let msgError = null; // Variável global para rastrear a mensagem de erro

btn.addEventListener("click", () => {
    // Remove mensagem de erro anterior se existir
    if (msgError) {
        msgError.remove();
    }

    if (emailInput.value === "" || !emailInput.value.includes("@")) {
        // Cria nova mensagem de erro
        msgError = document.createElement("p");
        msgError.textContent = "Please provide a valid email!";
        msgError.classList.add("error-mensage");
        emailContainer.appendChild(msgError);

        // Adiciona classes de erro
        emailContainer.classList.add("error");
        emailInput.classList.add("input-error");
        btn.classList.add("btn-error");
    } else {
        // Remove classes de erro
        emailContainer.classList.remove("error");
        emailInput.classList.remove("input-error");
        btn.classList.remove("btn-error");
        msgError = null; // Limpa a referência
    }
});