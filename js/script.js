const form = document.getElementById("form")


form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Inscrição Confirmada!")
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    
    let data = {
        nome,
        email
    }

    let convertData = JSON.stringify(data);

    localStorage.setItem("lead", convertData)

    let formContent = document.getElementById("form-container")

    let carregando = `<p> Carregando... </p> `

    formContent.innerHTML = carregando

    let pronto = `<p> Enviado Com Sucesso ! </p>`

    setTimeout(() => {
        formContent.innerHTML = pronto
    }, 1000);
})