const bloquetema = document.getElementById("bloquetema");
const bloqueotrotema = document.getElementById("bloqueotrotema");

bloquetema.addEventListener("change", function() {
    const op = this.value;
    if (op === "otro") {
        bloquetema.classList.remove("escondido");
    } else {
        bloqueotrotema.classList.add("escondido");
    }
})