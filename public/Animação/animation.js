let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');


const img = new Image();


let mouseX = 0;
let mouseY = 0;
let imagemX = 0;
let imagemY = 0;
let imagemCarregada = false;
const LARGURA_IMG = 183;
const ALTURA_IMG = 208;

img.addEventListener('load', () => {
    imagemCarregada = true;
    console.log("Sua imagem de 183x208 carregou com sucesso!");
    atualizarLoop();
});




window.addEventListener("mousemove", function (evento) {
    console.log(evento);

    let rect = canvas.getBoundingClientRect();
    mouseX = evento.clientX - rect.left - (LARGURA_IMG / 2);
    mouseY = evento.clientY - rect.top - (ALTURA_IMG / 2);
    console.log(mouseX, mouseY);



    imagemX = Math.max(0, Math.min(mouseX, canvas.width - LARGURA_IMG));
    imagemY = Math.max(0, Math.min(mouseY, canvas.height - ALTURA_IMG));


})

function atualizarLoop() {
    if (imagemCarregada) {
        // Aplica a trava de segurança para não sair do canvas
        imagemX = Math.max(0, Math.min(mouseX, canvas.width - LARGURA_IMG));
        imagemY = Math.max(0, Math.min(mouseY, canvas.height - ALTURA_IMG));

        // Limpa e redesenha
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, imagemX, imagemY, LARGURA_IMG, ALTURA_IMG);
    }

    requestAnimationFrame(atualizarLoop);
}


img.src = 'Bendizito.png';