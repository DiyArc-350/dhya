const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');


button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

function toggleModal() { document.getElementById('modal').classList.toggle('hidden')
}

