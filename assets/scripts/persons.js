
// Toggle de imagem
function toggleImage(image) {
    const filename = image.src.split('/').pop();
    const match = filename.match(/^([pd])(\d+)\.jpg$/);
    if (!match) return;

    const next = match[1] === 'p' ? 'd' : 'p';
    image.classList.add('rotate-image');

    setTimeout(function () {
        image.src = 'assets/images/' + next + match[2] + '.jpg';
        image.classList.remove('rotate-image');
    }, 1000);
}


//  Modal expandido 
document.addEventListener('DOMContentLoaded', function () {

    // Cria o modal uma vez e injeta no body
    var modal = document.createElement('div');
    modal.id = 'person-modal';
    modal.innerHTML = `
        <div id="person-modal-overlay"></div>
        <div id="person-modal-box">
            <button id="person-modal-close" aria-label="Fechar">✕</button>
            <img id="person-modal-img" src="" alt="">
            <div id="person-modal-info">
                <h2 id="person-modal-name"></h2>
                <p id="person-modal-desc"></p>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    var overlay = document.getElementById('person-modal-overlay');
    var closeBtn = document.getElementById('person-modal-close');
    var modalImg = document.getElementById('person-modal-img');
    var modalName = document.getElementById('person-modal-name');
    var modalDesc = document.getElementById('person-modal-desc');

    function openModal(imgSrc, name, desc) {
        modalImg.src = imgSrc;
        modalName.textContent = name;
        modalDesc.textContent = desc;
        modal.classList.add('modal-open');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('modal-open');
        document.body.style.overflow = '';
    }

    overlay.addEventListener('click', closeModal);
    closeBtn.addEventListener('click', closeModal);
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeModal();
    });

    // Adiciona listener de clique em cada .person
    document.querySelectorAll('.person').forEach(function (person) {
        person.style.cursor = 'pointer';

        person.addEventListener('click', function (e) {
            // Ignora clique direto na imagem (que já faz o toggle)
            if (e.target.classList.contains('person-image')) return;

            var img = person.querySelector('.person-image');
            var name = person.querySelector('h2') ? person.querySelector('h2').textContent : '';
            var desc = person.querySelector('p') ? person.querySelector('p').textContent : '';

            openModal(img.src, name, desc);
        });
    });

});